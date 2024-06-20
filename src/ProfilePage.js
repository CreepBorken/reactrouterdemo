import React, { useEffect } from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  return (
      <>        
          <h1>Pefil</h1>
          <p>Bienvenido: {auth.user.username}</p>
      </>
  );
}

export default ProfilePage;
