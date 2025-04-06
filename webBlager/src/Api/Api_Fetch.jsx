import React, { useEffect, useState } from "react";

const Api_Fetch = () => {
  const [searchValue, setSearch] = useState({
    search: "",
    sort: "",
  });

  const [data, setData] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const responce = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await responce.json();
      setData(res);
      setDatas(res);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    const updatedSearch = {
      ...searchValue,
      [name]: value,
    };

    setSearch(updatedSearch);

    // Filter logic
    let filtered = datas.filter((item) =>
      item.name.toLowerCase().includes(updatedSearch.search.toLowerCase())
    );

    // Sort logic
    if (updatedSearch.sort === "acending") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (updatedSearch.sort === "descending") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setData(filtered);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search Here"
        value={searchValue.search}
        name="search"
        onChange={handleChange}
        style={{ padding: "1em" }}
      />

      <select
        name="sort"
        value={searchValue.sort}
        onChange={handleChange}
        style={{ padding: "1em", marginLeft: "1em" }}
      >
        <option value="">Select</option>
        <option value="acending">Acending</option>
        <option value="descending">Descending</option>
      </select>

      <div className="apiBox">
        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.address.street + item.address.suite + item.address.city}</p>
            <h4>Company: {item.company.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Api_Fetch;
