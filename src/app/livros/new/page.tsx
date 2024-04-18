import BookForm from '@/components/BookForm';
import { useRouter } from 'next/router';

interface Book {
  title: string;
  author: string;
}

export default function AddNewBook() {
  const router = useRouter();

  const handleAddBook = (book: Book) => {
    // Aqui você pode adicionar o livro ao seu estado global ou a um banco de dados
    console.log(book);
    router.push('/');
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
}
