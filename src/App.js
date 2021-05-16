import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>이름</label>
			<input {...register("name", { required: true, minLength: 2 })} />
			{errors.name?.type === "minLength" &&
				"이름은 최소 2글자 이상이어야 합니다."}
			{errors.name?.type === "required" && "이름은 필수입니다."}
			<label>나이</label>
			<input type="number" {...register("age", { min: 18, max: 99 })} />
			{errors.age && "나이는 18세 이상 100세 이하만 입력이 가능합니다."}
			<input type="submit" />
		</form>
	);
}

export default App;
