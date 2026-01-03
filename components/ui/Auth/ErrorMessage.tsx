const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="padding-md rounded-md bg-red-100 text-sm text-red-800">
      {message}
    </div>
  );
};

export default ErrorMessage;
