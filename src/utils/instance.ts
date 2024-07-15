import Notify from "simple-notify";

export const fetchInstance = async (url: string, options: any) => {
  try {
    let response = await fetch(url, options);
    // if(!response.ok) throw new Error("Some error");
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);

      new Notify({
        status: "error",
        title: "Error",
        text: errorData.message || "Something went wrong",
        effect: "fade",
        speed: 300,
        autotimeout: 3000,
        position: "right top",
      });
    }
  } catch (e: any) {
    console.log(e);
    new Notify({
      status: "error",
      title: "Error",
      text: e.message || "Network error",
      effect: "fade",
      speed: 300,
      autotimeout: 3000,
      position: "right top",
    });
    return e.response;
  }
};
