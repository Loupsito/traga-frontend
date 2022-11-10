export function EditableText(props: any) {
  return (
    <span>
      {props.isInputDisplay ? (
        <input
          type="text"
          value={props.value}
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          autoFocus
        />
      ) : (
        <h2 onDoubleClick={props.handleDoubleClick}>{props.value}</h2>
      )}
    </span>
  );
}
