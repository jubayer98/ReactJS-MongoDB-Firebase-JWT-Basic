import { useEffect, useState } from "react";
import LatestBooksCard from "../Home/LatestBooksCard";

const AllBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://library-management-server-two-opal.vercel.app/books")
            .then(res => res.json())
            .then(data => {
                // Sorting the books by author name in ascending order
                const sortedBooks = data.sort((a, b) => {
                    const authorA = a.AuthorName.toLowerCase(); // considering case insensitivity
                    const authorB = b.AuthorName.toLowerCase(); // considering case insensitivity
                    return authorA.localeCompare(authorB);
                });
                setBooks(sortedBooks);
            })
    }, []);

    return (
        <div>
            <h2 className="font-semibold text-2xl text-slate-600 text-center">All Books</h2>
            <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    books.map(book => <LatestBooksCard
                        key={book._id}
                        book={book}>
                    </LatestBooksCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;
