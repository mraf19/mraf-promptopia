export type FormProps = {
  type: "Create" | "Edit";
  post: {
    prompt: string;
    tag: string;
  };
  setPost: React.Dispatch<React.SetStateAction<any>>;
  submitting: boolean;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
};
