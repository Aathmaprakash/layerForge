// src/components/GetQuote/GetQuote.js
import React, { useState } from "react";
import "./GetQuote.css";
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { storage, db } from "../../firebase";

export default function GetQuote() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  const allowed = [".stl", ".obj", ".step", ".stpz", ".3mf"];
  const acceptString = ".stl,.obj,.step,.stpz,.3mf";

  const handleFile = (e) => {
    const f = e.target.files[0];
    if (!f) return setFile(null);

    const ext = "." + f.name.split(".").pop().toLowerCase();
    if (!allowed.includes(ext)) {
      alert("Unsupported file type. Please upload STL/OBJ/STEP/3MF.");
      return setFile(null);
    }
    setFile(f);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Please fill name and email.");
      return;
    }
    setStatus("uploading");
    try {
      let fileURL = "";
      let storagePath = "";
      if (file) {
        const filename = `${Date.now()}_${file.name}`;
        storagePath = `designs/${filename}`;
        const storageRef = ref(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const pct = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(pct);
          },
          (err) => {
            console.error("Upload error", err);
            setStatus("error");
            alert("Upload failed.");
          },
          async () => {
            fileURL = await getDownloadURL(uploadTask.snapshot.ref);
            // save metadata to Firestore
            await addDoc(collection(db, "quotes"), {
              name,
              email,
              message,
              fileName: file.name,
              fileURL,
              storagePath,
              status: "new",
              createdAt: serverTimestamp(),
            });
            setStatus("done");
            setProgress(100);
            setName("");
            setEmail("");
            setMessage("");
            setFile(null);
            alert("Design submitted — we will send a quote within 24 hours.");
          }
        );
      } else {
        // allow submission without file (optional)
        await addDoc(collection(db, "quotes"), {
          name,
          email,
          message,
          fileName: null,
          fileURL: null,
          storagePath: null,
          status: "new",
          createdAt: serverTimestamp(),
        });
        setStatus("done");
        setName("");
        setEmail("");
        setMessage("");
        alert("Request submitted — we will contact you.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section className="getquote" id="quote">
      <div className="quote-inner">
        <h3>Get a Quick Quote</h3>
        <p className="muted">Upload your design and we'll send an estimate in 24 hours.</p>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="row">
            <input
              aria-label="Your name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              aria-label="Your email"
              placeholder="Your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <textarea
            aria-label="Project details"
            placeholder="Project details (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label className="file-label">
            <input type="file" accept={acceptString} onChange={handleFile} />
            <span>{file ? file.name : "Choose design file (STL/OBJ/STEP)"}</span>
          </label>

          {status === "uploading" && (
            <div className="progress">
              <div className="bar" style={{ width: `${progress}%` }} />
              <span>{progress}%</span>
            </div>
          )}

          <div className="form-actions">
            <button className="btn primary" type="submit" disabled={status === "uploading"}>
              {status === "uploading" ? "Uploading..." : "Submit & Get Quote"}
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                setName("");
                setEmail("");
                setMessage("");
                setFile(null);
                setProgress(0);
                setStatus("");
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

