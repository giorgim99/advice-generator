import React, { useState } from "react";
import "./style.css";
export default function App() {
  const [activeAdvice, setActiveAdvice] = useState("");
  const [activeAdviceId, setActiveAdviceId] = useState(0);
  async function getAPI() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const advice = await res.json();
    setActiveAdvice(advice.slip.advice);
    setActiveAdviceId(advice.slip.id);
  }
  getAPI();
  return (
    <div className="container">
      <div className="advice-box">
        <h5>ADVICE #{activeAdviceId}</h5>
        <h3>"{activeAdvice}"</h3>
        <svg
          id="divider"
          width="444"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" />
            <g transform="translate(212)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3" />
              <rect x="14" width="6" height="16" rx="3" />
            </g>
          </g>
        </svg>
        <button onClick={() => getAPI()}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
              fill="#202733"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
