import { redirect } from "next/navigation";
import Model from "@/components/Model";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import React from "react";

const CreateProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) redirect("/");
  return (
    <Model>
      <h3 className="model-head-text">Create Project</h3>
      <ProjectForm type="create" session={session} />{" "}
    </Model>
  );
};

export default CreateProject;
