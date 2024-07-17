export const POST = async (req: Request) => {
  const { name, email } = await req.json();
  
  return Response.json({
    success: true,
    message: `Hello, ${name}! Your email is ${email}.`
  });
};
