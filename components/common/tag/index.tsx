import { TagWrapper } from "./styles";

export default function Tag({ title }) {
  return <TagWrapper>{`# ${title}`}</TagWrapper>;
}
