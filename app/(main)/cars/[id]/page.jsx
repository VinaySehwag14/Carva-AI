const CarPage = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  return <div>CarPage:{id}</div>;
};

export default CarPage;
