type tableProps = {
  label: string;
  datasourse: any[];
  cols: any[];
};

export default function AppTable(props: tableProps) {
  const { label, datasourse, cols } = props;
  return (
    <div className="table-container shadow-lg">
      <table className="stylish-table">
        <thead>
          <tr>
            {cols.map((x, i) => (
              <th>{x.heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datasourse.map((row, i) => (
            <tr>
              {cols.map((col, ind) => (
                <td>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
