import type { NextPage } from "next";
import useSWR, { useSWRConfig } from "swr";
import { User } from "../types/types";
import type { AxiosError, AxiosResponse } from "axios";

const Home: NextPage = () => {
  // change the api endpoint to `/api/user1` to get a 404
  const { data, error } = useSWR<AxiosResponse<{ users: User[] }>, AxiosError>(
    "/api/user1"
  );

  // uncomment this for a 403 error
  // when I use `onErrorRetry` and stop retrying if it is a 404,
  // it would be nice if this still retried using exponential backoff alogrithm
  // const { data: sampleData } = useSWR("/api/sample");

  console.log(error && error.response);

  if (error) return <h1>Error</h1>;
  if (!data) return <h1>Loading...</h1>;
  console.log(data.data);

  return (
    <div>
      {data.data.users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Home;
