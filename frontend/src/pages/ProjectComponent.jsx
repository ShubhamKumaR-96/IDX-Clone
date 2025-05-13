import { useParams } from "react-router-dom";
import EditorComponent from "../components/molecules/EditorComponent";
import EditorButton from "../components/atoms/EditorButton/EditorButton";
import TreeStructure from "../components/organisms/TreeStructure";

const ProjectComponent = () => {
  const { projectId } = useParams();
  return (
    <div>
      ProjectId: {projectId}
      <div>
        <EditorComponent />
        <EditorButton isActive={false} />
        <EditorButton isActive={true} />
        <TreeStructure />
      </div>
    </div>
  );
};

export default ProjectComponent;
