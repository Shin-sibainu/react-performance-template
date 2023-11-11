import useSWR from "swr";

type User = {
  id: string;
  name: string;
  email: string;
};

async function fetcher(key: string) {
  return await fetch(key).then((res) => res.json());
}

export const useUser = (id: number) => {
  const { data, isLoading, error } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    fetcher
  );

  return {
    user: data,
    isLoading,
    error,
  };
};
