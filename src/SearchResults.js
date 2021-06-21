import React from "react";
import moment from "moment";

const SearchResults = ({ results }) => {
  const resultKeys = Object.keys(results[0]);
  console.log(resultKeys);
  console.log(moment());
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {resultKeys.map((item, index) => (
              <th key={index} scope="col">
                {item}
              </th>
            ))}
            <th>nights</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.title}</td>
              <td>{item.firstName}</td>
              <td>{item.surname}</td>
              <td>{item.email}</td>
              <td>{item.roomId}</td>
              <td>{item.checkInDate}</td>
              <td>{item.checkOutDate}</td>
              <td>
                {moment(item.checkOutDate).diff(
                  moment(item.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
