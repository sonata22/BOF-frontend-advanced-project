import React from "react";

const AddCategory = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="categoryid">Category ID</label>
        <input type="number" name="categoryid" id="categoryid" />
        <label htmlFor="categoryname">Category Name</label>
        <input type="text" name="categoryname" id="categoryname" />
        <label htmlFor="categoryurl">Category Image URL</label>
        <input
          type="url"
          name="categoryurl"
          id="categoryurl"
          placeholder="https://example.com"
          pattern="https://.*"
        />
      </form>
    </div>
  );
};

export default AddCategory;
