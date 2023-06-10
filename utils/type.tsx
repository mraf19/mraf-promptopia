export type FormProps = {
  type: string;
  post: {
    prompt: string;
    tag: string;
  };
  setPost: Function;
  submitting: boolean;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};
