import React from "react";
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject";
import { Typography, Button, Spin, Space, message } from "antd";

const { Title } = Typography;

const CreateProject = () => {
  const { createProjectMuation, isPending } = useCreateProject();

  async function handleCreateProject() {
    console.log("Going to trigger the projects");
    try {
      await createProjectMuation();
      message.success("Project created successfully!");
    } catch (error) {
      console.log("Error creating Projects", error);
      message.error("Failed to create project");
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
      <Space direction="vertical" align="center">
        <Title level={2}>Create Project</Title>
        <Button type="primary" onClick={handleCreateProject} loading={isPending}>
          Create Project
        </Button>
        {isPending && <Spin tip="Creating Project..." />}
      </Space>
    </div>
  );
};

export default CreateProject;
