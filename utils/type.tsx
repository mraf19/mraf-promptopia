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
  handleEdit?: React.MouseEvent<HTMLElement>;
  handleDelete?: React.MouseEvent<HTMLElement>;
};

export type PromptCardListType = {
  data: PromptTypes[];
  handleTagClick?: Function;
};
