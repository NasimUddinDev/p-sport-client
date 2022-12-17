export default function NewsCard() {
  return (
    <a href="" className="flex gap-4 mb-4 border border-primary rounded-md">
      <img
        src="https://media.cnn.com/api/v1/images/stellar/prod/221209224226-argentina-celebrate.jpg?c=16x9&q=h_720,w_1280,c_fill"
        alt=""
        className=" w-36 h-auto rounded-md"
      />
      <div>
        <h3 className="text-xl font-semibold text-primary">
          The Mac Allister dynasty: From Diego Maradona to Lionel Messi – an
          exclusive chat with Argentina World Cup star Alexis
        </h3>
        <div className="flex items-center gap-4">
          <p>Author Name</p>
          <p>time</p>
        </div>
      </div>
    </a>
  );
}
