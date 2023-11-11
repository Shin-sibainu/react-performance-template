import { useCallback, useEffect, useMemo, useState } from "react";
import React from "react";
import "./App.css";

// 1.React.memo
// function App() {
//   console.log("rendered Parent");
//   const [count1, setCount1] = useState<number>(0);
//   const [count2, setCount2] = useState<number>(0);

//   return (
//     <>
//       <button onClick={() => setCount1(count1 + 1)}>Parent Count</button>
//       <button onClick={() => setCount2(count2 + 1)}>Child Count</button>
//       <p>App: {count1}</p>
//     </>
//   );
// }

// export default App;

//2.useCallback
// export default function App() {
//   console.log("rendered Parent");
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Parent Increment count
//       </button>
//     </>
//   );
// }

//3.useMemo
// export default function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   return (
//     <>
//       <h2>Increment count1</h2>
//       <p>Counter: {count1}</p>
//       <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

//       <h2>Increment count2</h2>
//       <p>
//         Counter: {count2}
//       </p>
//       <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
//     </>
//   );
// }

//4.useSWR
// function App() {
//   return (
//     <div>
//       <p></p>
//     </div>
//   );
// }

// export default App;

//5.React Query(Tanstack Query)
// function App() {
//   return <Example />;
// }

// function Example() {
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong>
//       <div>{isFetching ? "Updating..." : ""}</div>
//     </div>
//   );
// }

// export default App;

//6. React.lazy()
// export default function MarkdownEditor() {
//   const [showPreview, setShowPreview] = useState(false);
//   const [markdown, setMarkdown] = useState("");

//   return (
//     <>
//       <textarea
//         value={markdown}
//         onChange={(e) => setMarkdown(e.target.value)}
//       />
//       <label>
//         <input
//           type="checkbox"
//           checked={showPreview}
//           onChange={(e) => setShowPreview(e.target.checked)}
//         />
//         Show preview
//       </label>
//       <hr />
//       {showPreview && <p>Preview</p>}
//     </>
//   );
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// function delayForDemo(promise: any) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   }).then(() => promise);
// }
