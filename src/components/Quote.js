import './Quote'
import { useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("Happiness");
  const apiKEY = "IPnKNbNQKzepQid95cJdkQ==ELVdlDzFqHTIEEwP";

  const fetchQuote = () => {
    const apiURL = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    fetch(apiURL, {
      headers: {
        "X-Api-Key": apiKEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to see what is returned
        if (data && data.length > 0) {
          setQuote(data[0].quote);
          setAuthor(() => "-- " + data[0].author);
        }
      });
  };

  const changeCategory = (e) => {
    setCategory(e.target.innerText);
  };

  return (
    <div className='container'>
      <div className='categories'>
        <ul>
          <li onClick={changeCategory}>Happiness</li>
          <li onClick={changeCategory}>Courage</li>
          <li onClick={changeCategory}>Freedom</li>
        </ul>
      </div>
      <div className='main'>
        <p>Generate a quote about <span>{category}</span></p>
        <p className='quotePara hidden'>{quote}</p>
        <p className='authorPara hidden'>{author}</p>
        <button onClick={() => {
          const hiddenEle = document.querySelectorAll('.hidden');

          hiddenEle.forEach(Element => {
            Element.classList.remove('hidden');
            Element.classList.add('show');
          })
          fetchQuote();
          

        }}>Generate</button>
      </div>
    </div>
  );
}

export default Quote;
