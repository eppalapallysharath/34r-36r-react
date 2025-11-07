import { useEffect, useState } from "react";
import axios from "axios";

export const UserPosts = () => {
  const [data, setData] = useState([]);
  const [userIds, setUserIds] = useState([]);
  const [selectUserId, setSelectUserId] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getUserIds = (responseData) => {
    const newArr = [];
    responseData.forEach((item) => {
      if (!newArr.includes(item.userId)) {
        newArr.push(item.userId);
      }
    });
    return newArr;
  };

  const fetchposts = () => {
    if (selectUserId === "all") {
      setLoading(true);
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setData(res.data);
          setUserIds(getUserIds(res.data));
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading(false), setData([]);
        });
    } else {
      setLoading(true);
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${selectUserId}`)
        .then((res) => {
          setData(res.data);
          setLoading(false);
          setError("");
        })
        .catch((err) => {
          console.log(err);
          setError(err.message);
          setLoading(false);
          setData([]);
        });
    }
  };

  useEffect(() => {
    fetchposts();
  }, [selectUserId]);

  const handleOptions = (e) => {
    setSelectUserId(e.target.value);
  };
  console.log(selectUserId);
  return (
    <div>
      <p>user posts</p>
      <select onChange={(e) => handleOptions(e)}>
        <option value="all">all</option>
        {userIds.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <div>
        {/* {data.length > 0 ? data.map((post) => (
          <div key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.body} </p>
            <p> user id {post.userId}</p>
          </div>
        )) : <h5>Loading .....</h5>} */}
        {error.length > 0 ? <p style={{ color: "red" }}>{error}</p> : <></>}
        {loading ? (
          <h4>Loading.....</h4>
        ) : (
          data.map((post) => (
            <div key={post.id}>
              <h3> {post.title} </h3>
              <p> {post.body} </p>
              <p> user id {post.userId}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
