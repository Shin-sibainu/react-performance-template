import { useCallback, useEffect, useMemo, useState } from "react";
import React from "react";
import "./App.css";
import { useToggle } from "./hooks/useToggle";
import useSWR from "swr";
import { useUser } from "./hooks/useUser";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
//       <Child count={count2} />
//     </>
//   );
// }

// const Child = React.memo(({ count }: any) => {
//   console.log("rendered Child");
//   let i = 0;
//   while (i < 10000000) i++;
//   return <p>Child: {count}</p>;
// });

// export default App;

//2.useCallback
// export default function App() {
//   console.log("rendered Parent");
//   const [count, setCount] = useState(0);
//   const [on, toggle] = useToggle(false);

//   // const handleClick = () => {
//   //   console.log("click");
//   // };

//   const handleClick = useCallback(() => {
//     console.log("click");
//   }, []);

//   return (
//     <>
//       <p>Counter: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Parent Increment count
//       </button>
//       <Child handleClick={handleClick} toggle={toggle} on={on} />
//       <p>{on ? "ON" : "OFF"}</p>
//     </>
//   );
// }

// const Child = React.memo(({ handleClick, toggle, on }: any) => {
//   console.log("rended Child");
//   let i = 0;
//   while (i < 10000000) i++;
//   return <button onClick={toggle}>Child {on}</button>;
// });

//3.useMemo
// export default function App() {
//   const [count1, setCount1] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const double = (count: number) => {
//     let i = 0;
//     while (i < 100000000) i++;
//     return count * 2;
//   };

//   const doubleCount = useMemo(() => double(count2), [count2]);

//   return (
//     <>
//       <h2>Increment count1</h2>
//       <p>Counter: {count1}</p>
//       <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>

//       <h2>Increment count2</h2>
//       <p>
//         Counter: {count2}, {doubleCount}
//       </p>
//       <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
//     </>
//   );
// }

//4.useSWR
// function App() {
//   // const [userData, setUserData] = useState<User | null>(null);
//   // const [isLoading, setIsLoading] = useState<boolean>(false);

//   // useEffect(() => {
//   //   // console.log("effect");
//   //   const getUserData = async () => {
//   //     try {
//   //       setIsLoading(true);
//   //       const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   //       const data = await res.json();
//   //       setUserData(data);
//   //     } catch (err) {
//   //       console.error(err);
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };

//   //   getUserData();
//   // }, []);
//   const { user, isLoading, error } = useUser(2);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error</p>;
//   }

//   return (
//     <div>
//       <p>{user?.name}</p>
//       <p>{user?.email}</p>
//     </div>
//   );
// }

// export default App;

//5.React Query(Tanstack Query)
// function App() {
//   const queryClient = new QueryClient();

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Example />
//     </QueryClientProvider>
//   );
// }

// function Example() {
//   const { data, error, isPending, isFetching, isLoading } = useQuery({
//     queryKey: ["repoData"],
//     queryFn: () =>
//       fetch("https://api.github.com/repos/TanStack/query").then((res) =>
//         res.json()
//       ),
//   });

//   if (isPending) return "Loading...";

//   if (error) return "Error" + error.message;

//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <p>{data.description}</p>
//       <strong>👀 {data.subscribers_count}</strong>{" "}
//       <strong>✨ {data.stargazers_count}</strong>{" "}
//       <strong>🍴 {data.forks_count}</strong>
//       <div>{isFetching ? "Updating..." : ""}</div>
//       <ReactQueryDevtools />
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
