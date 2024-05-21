const ReviewContent = ({ rating, timeStamp, message }) => {
  return (
    <div className="flex-col items-start space-x-4 mb-4">
      <div className="flex flex-col mt-2 text-left">
        <div className="mt-2 p-1 rounded-lg bg-blue-200 text-black">
          <div className="flex items-center mb-1 gap-2">
            <span className="text-sm font-semibold">{`Rating: ${rating}`}</span>
            <span className="text-gray-500 text-left">{timeStamp}</span>
          </div>
          <div >
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContent;
