function CollectionIcon({ color = "#B0ABA7", className="icon" }) {
  return (
    <svg
      className={className}
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.000100349L8 0V12.0001C8.30236 12 8.56649 12.0001 8.97231 12.0001C9.23758 12.0001 9.56339 12.0001 10 12.0001H17L19 12V2.0001V0.000110807L10 0.000100349ZM10 2.0001H17V10.0001H10V2.0001ZM4 5.0001C4 3.89558 4.00047 3.0001 4.00047 3.0001H7.5V5.0001H6V14.0001H15V12.5001H17V16.0001H15H6H4V5.0001ZM4.5877e-06 9.0001C4.5877e-06 8.46713 -0.000172935 8.09926 -0.000314899 7.80507C-0.000467142 7.48958 -0.000578491 7.25883 -0.000386151 7.0001H3.5V9.0001H2V18.0001H11V16.5001H13V20.0001H11H2H4.5877e-06V9.0001Z"
        fill={color}
      />
    </svg>
  );
}

export default CollectionIcon;
