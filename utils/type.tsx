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

export type PromptTypes = {
  _id?: string;
  creator: string;
  prompt: string;
  tag: string;
};

export type PromptCardTypes = {
  data: PromptTypes;
  handleTagClick?: Function;
  handleEdit?: Function;
  handleDelete?: Function;
};

export type PromptCardListType = {
  data: PromptTypes[];
  handleTagClick?: Function;
};

export type ProfileProps = {
  name: string;
  desc: "Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination";
  data: PromptTypes[];
  handleEdit?: Function;
  handleDelete?: Function;
};
