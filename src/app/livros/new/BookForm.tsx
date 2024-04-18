import { FormEvent, useState } from 'react';

interface Book {
  title: string;
  author: string;
}

interface BookFormProps {
  onSubmit: (book: Book) => void;
}

function BookForm({ onSubmit }: BookFormProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookForm;
