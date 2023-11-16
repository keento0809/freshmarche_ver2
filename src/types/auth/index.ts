type SignupUser = {
  name: string;
  email: string;
  password: string;
  image_url: string;
};

type loginUser = Omit<SignupUser, "name" | "image_url">;

export type { SignupUser, loginUser };
