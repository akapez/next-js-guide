'use client';

import { useFormState } from "react-dom";
import FormSubmit from '@/components/form-submit';
import { createPost } from '@/actions/posts';


export default function NewPostPage() {
  const [state, formAction] = useFormState(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <div className="form-actions">
          <FormSubmit />
        </div>
        {state.errors && <ul className="form-errors">{state.errors.map((error) => (<li key={error}>{error}</li>))}</ul>}
      </form>
    </>
  );
}
