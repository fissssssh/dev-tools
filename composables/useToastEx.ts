export function useToastEx() {
  const toast = useToast();

  function info(title: string, description?: string) {
    toast.add({
      icon: "heroicons:exclamation-circle-20-solid",
      title: title,
      description: description,
      color: "gray",
    });
  }

  function success(title: string, description?: string) {
    toast.add({
      icon: "heroicons:check-circle-20-solid",
      title: title,
      description: description,
      color: "primary",
    });
  }

  function error(title: string, description?: string) {
    toast.add({
      icon: "heroicons:x-circle-20-solid",
      title: title,
      description: description,
      color: "red",
    });
  }

  return { info, success, error };
}
