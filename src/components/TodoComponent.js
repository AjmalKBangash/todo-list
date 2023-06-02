import "./TodoComponent.css";

export default function TodoComponent(props) {
  function del(e) {
    var vv = props.data.findIndex((indd) => {
      if (props.veer.id === indd.id) {
        // return indd.id;
        var indexvalue = indd.id;
      }
      return indexvalue;
    });

    // console.log(props.data.splice(vv, 1));
    // props.dataHandlerProp(props.data);

    props.dataHandlerProp(vv);
    e.preventDefault();
  }
  return (
    <div className="todoCom">
      {/* <input className="todolist" defaultValue={props.veer.value} /> */}
      <p className="todolist">{props.veer.value}</p>
      <button className="btnn" onClick={del}>
        {/* <img src="./logo192.png" alt="Close" /> */}
        &#10060;
      </button>
    </div>
  );
}
