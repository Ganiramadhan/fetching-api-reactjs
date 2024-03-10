import { useEffect, useState } from "react";

const Book = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="flex flex-wrap justify-around">
            {books.map(book => (
                <div key={book.id} className="card w-96 bg-base-400 shadow-xl mt-4 mx-2">
                    <figure><img src="https://i.pinimg.com/564x/63/5c/e3/635ce31a1c2cb50db432f37bf7e7fc13.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {book.title}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{book.body}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Self Improvement</div>
                            <div className="badge badge-outline">Education</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Book;
