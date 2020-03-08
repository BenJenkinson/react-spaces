import * as React from "react";
import { CSSProperties } from "react";
import { Centered } from "../Centered";
import { Info } from "../SpaceInfo";
import { Fixed } from "../Fixed";
import { Top, Fill, LeftResizable, Right, BottomResizable } from "../Space";
import { CenterType } from "../../types";

export const CommonHeader = () => (
	<div style={{ marginBottom: 25 }}>
		<h1 style={{ fontSize: 30, marginTop: 0, marginBottom: 10 }}>React Spaces</h1>
		<p>
			<a href="https://www.npmjs.com/package/react-spaces" target="_blank">
				<img src="https://img.shields.io/npm/v/react-spaces.svg" alt="NPM" />
			</a>
			&nbsp;&nbsp;
			<a href="https://GitHub.com/aeagle/react-spaces/" target="_blank">
				<img
					src="https://img.shields.io/github/stars/aeagle/react-spaces.svg?style=social&amp;label=Star&amp;maxAge=2592000"
					alt="GitHub stars"
				/>
			</a>
		</p>
	</div>
);

export const DemoUI = () => {
	const [sidebarExpanded, setSidebarExpanded] = React.useState(true);

	return (
		<Fixed style={{ outline: "1px solid black" }} height={400}>
			<Top style={{ borderBottom: "1px dashed black", padding: 5 }} order={1} size={25} centerContent={CenterType.Vertical}>
				Title
			</Top>
			<Top style={{ borderBottom: "1px dashed black", padding: 5 }} order={2} size={25} centerContent={CenterType.Vertical}>
				Menu bar
			</Top>
			<Fill>
				<LeftResizable style={{ borderRight: "1px dashed black" }} size={sidebarExpanded ? 200 : 25}>
					<Top style={{ borderBottom: "1px dashed black" }} size={25}>
						{sidebarExpanded && (
							<Fill style={{ padding: 5 }} centerContent={CenterType.Vertical}>
								Sidebar title
							</Fill>
						)}
						<Right
							style={{ borderLeft: "1px dashed black", backgroundColor: "yellow", cursor: "pointer" }}
							size={25}
							onClick={() => setSidebarExpanded((prev) => !prev)}
							centerContent={CenterType.HorizontalVertical}>
							<i className={"fa fa-arrow-" + (sidebarExpanded ? "left" : "right")} />
						</Right>
					</Top>
					{sidebarExpanded && <Fill centerContent={CenterType.HorizontalVertical}>Sidebar</Fill>}
				</LeftResizable>
				<Fill>
					<Fill centerContent={CenterType.HorizontalVertical}>Main content</Fill>
					<BottomResizable style={{ borderTop: "1px dashed black" }} size={100} centerContent={CenterType.HorizontalVertical}>
						Bottom area
					</BottomResizable>
				</Fill>
			</Fill>
		</Fixed>
	);
};

export const blue: CSSProperties = { backgroundColor: "#e0eeee" };
export const red: CSSProperties = { backgroundColor: "#eee0e0" };
export const green: CSSProperties = { backgroundColor: "#e0eee0" };

export const description = (props: string, additional?: React.ReactNode) => (
	<Info>
		{(info) => (
			<Centered>
				<div className="description">
					<strong>{props}</strong>
					<br />
					{info && (
						<>
							{info.width} x {info.height}
						</>
					)}
				</div>
				{additional}
			</Centered>
		)}
	</Info>
);

export const lorem = (
	<div style={{ padding: 10, fontSize: 14, lineHeight: 1.5 }}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo dicta ut, exercitationem, corporis nam minus molestias earum deserunt,
		explicabo unde quisquam saepe. Neque iusto vel error porro odit officia animi ex accusamus alias quod doloribus, similique vitae repellendus
		maxime, nihil ullam numquam, sint modi molestiae asperiores esse. Dolorum molestiae quam ut iste, ducimus soluta quaerat voluptatem labore
		minus neque porro quod eius suscipit modi corporis optio est adipisci numquam quae culpa voluptates quos. Fugit quaerat tenetur sint dolores
		autem provident nisi placeat, similique recusandae atque, nam sapiente culpa nesciunt praesentium amet, hic tempore suscipit. Reiciendis ipsa
		eligendi, eum eius architecto illum quae atque quis impedit, fugit esse inventore. Ducimus commodi aliquam adipisci voluptate quos dolor
		accusamus eligendi aperiam reiciendis, nostrum veritatis. Ad voluptatem aspernatur vitae suscipit, fuga, consequuntur dicta saepe maxime optio
		ab ex sunt illum? Minus consectetur quas assumenda iure, obcaecati eveniet in ullam quibusdam molestiae quo impedit illo nostrum commodi
		distinctio molestias nobis sint, aut ipsum. Sed nostrum quam enim vel quis quas delectus, totam voluptas ipsam consectetur ratione quaerat
		quae exercitationem vero nam atque at officiis! Aperiam eius voluptatum aliquam officia sit mollitia, dolore non, voluptate iure eligendi
		nostrum nam atque accusamus totam hic accusantium natus, fugiat ex cum recusandae quo doloremque eaque labore quisquam? Sequi sed, nobis quae
		eum quod repellat mollitia maxime ab repellendus dignissimos, expedita aperiam neque accusantium reprehenderit illo, atque commodi rerum ullam
		rem. Sit molestiae iusto vel quas soluta commodi deserunt eos voluptatem sed sunt! Ad aliquid soluta incidunt, maxime facere illo ipsa. Modi
		odio voluptatibus, asperiores architecto saepe dolorem consequuntur blanditiis. Earum, accusamus consequatur. A, tempore. Nisi dignissimos
		quod exercitationem a blanditiis ipsa quasi dolorem sunt, assumenda magnam rem, libero laboriosam accusamus molestias possimus ex cupiditate
		sit deserunt. At eos odit nesciunt doloribus rerum omnis nostrum autem ab, odio incidunt suscipit fuga sapiente? Consequuntur, itaque ut!
		Nostrum repellendus porro suscipit repudiandae esse quae accusantium possimus! Eaque ut amet animi dignissimos autem hic maiores harum
		molestias exercitationem voluptate est explicabo doloremque in, magni at eveniet nulla nisi natus consectetur voluptatem aliquid repellendus
		deleniti labore esse. Veritatis, aliquid quidem? Provident eum sapiente placeat repudiandae id, ab facere blanditiis delectus est quod facilis
		in quo nobis officia alias ea exercitationem, fugiat molestias numquam! Est atque assumenda aut labore? Nisi, architecto nulla! Eligendi
		cupiditate tempore neque accusantium consequatur quaerat. Nobis nostrum corrupti dolores facilis totam optio quam facere quidem a, quia,
		possimus, placeat voluptates expedita culpa tenetur enim obcaecati sit sint architecto recusandae fugit ducimus esse necessitatibus. Officiis
		alias facilis commodi veniam inventore laboriosam deleniti ipsa et perspiciatis. Repellat, excepturi porro quaerat eius eum hic blanditiis
		inventore amet voluptatibus vitae fugit! Sequi, ipsa dolor cupiditate dolorum reiciendis, blanditiis pariatur magni aspernatur exercitationem
		vel, optio obcaecati et accusamus ullam fuga illo! Sint autem dolorem aperiam expedita ad non officia perferendis consequatur dignissimos cum,
		nihil in, modi nulla. Itaque iure quia voluptatum. Laboriosam aperiam deserunt vel. Facere esse eos iure veniam libero, soluta possimus dolor
		vitae a nemo temporibus. In optio natus voluptas! Voluptas dolores eaque cupiditate iusto distinctio nobis enim, soluta a iure ab nesciunt
		dolorem tempore autem aliquid et error voluptatibus perspiciatis minima, sed animi voluptatem ad commodi fugit sequi? Magni quia repudiandae
		nulla eos mollitia ratione nobis voluptatem asperiores assumenda neque illum, quidem vero laudantium incidunt qui reprehenderit libero in
		beatae minima commodi delectus odio blanditiis. Exercitationem libero itaque dolorem temporibus nesciunt explicabo quisquam voluptate animi
		dolores neque. Itaque incidunt aspernatur sunt. Ipsum laudantium doloribus nemo, eaque eos ab pariatur eius magnam optio dolore quisquam modi
		maiores fuga labore praesentium ipsam at? Quas deserunt dicta veniam debitis ipsam minima eveniet quo ex asperiores nisi, aperiam explicabo
		mollitia enim vero quis, dolorum recusandae accusantium, nihil cupiditate aut a corrupti voluptatibus. Quia deleniti nihil praesentium neque
		labore exercitationem, repellendus veritatis vitae reprehenderit facere aut ipsum assumenda dolore. Aspernatur eos natus ad quaerat eveniet
		voluptate, facere, totam praesentium saepe quasi ipsam impedit, facilis cumque tenetur a amet ullam nisi. Velit modi eaque aspernatur non.
		Eos, eligendi blanditiis. Ab delectus ratione perferendis aperiam laudantium ad vel autem suscipit sunt iste beatae facere nostrum nihil
		temporibus, deleniti laboriosam amet expedita molestias quibusdam dolores non illo. Reprehenderit praesentium eos nobis aperiam delectus sint
		alias quae aut nesciunt odit aspernatur, dolorem debitis necessitatibus voluptas provident ipsam. Repellendus voluptatem tempora neque?
		Numquam odit iste sint explicabo tenetur voluptatibus fugit facere aliquid veniam repudiandae repellendus dolorum, eveniet dolor
		exercitationem corrupti ex praesentium aliquam optio ea vero dolores culpa modi omnis quidem! Modi debitis qui perspiciatis ipsa? Odio
		adipisci tempore dolore reprehenderit nihil accusantium sint laboriosam debitis laborum consequatur repellat architecto voluptatibus magni nam
		illum modi corrupti rerum, quibusdam est ducimus numquam, harum voluptatem eveniet error! Modi et architecto a rem sequi autem quo nemo eaque
		delectus nobis perspiciatis voluptatibus ad odit, porro facilis cupiditate ipsum, magnam, obcaecati quisquam at explicabo quasi. Odit a
		quaerat aliquam consequuntur eius quibusdam quas necessitatibus rem dicta. Perferendis fugiat unde ex. Ab commodi eum odit ad vitae.
		Quibusdam, impedit fuga laborum veritatis alias quis totam molestias rem. Eveniet, iure quisquam? Quas fugit nihil natus at est, deserunt
		nesciunt corporis doloribus, repellendus iure aperiam laborum fugiat asperiores aut quibusdam enim incidunt iste harum molestias ratione
		officiis similique error? Maxime officia mollitia et, praesentium aperiam ducimus, earum inventore reiciendis dolorem at itaque nisi voluptate
		quia vitae quaerat aliquid commodi amet labore dolore? Pariatur culpa sit quos, nostrum incidunt ut eaque, laboriosam ex voluptates quae
		velit, accusamus quisquam reiciendis ea? Fugiat aspernatur a excepturi! Quam dolore deleniti cumque eaque ducimus voluptate aspernatur
		quibusdam expedita quo iste vero et, delectus id sit maxime fugiat nostrum maiores nesciunt eius natus minima tenetur. Id ratione sequi ipsum
		illo amet nisi! Id esse a eaque recusandae facilis ducimus optio, nemo pariatur at. Quos unde fugit sint voluptatum dignissimos quod harum eos
		magnam sit tempora, ab quisquam. Saepe sunt harum qui totam consectetur dolor, provident est error, quos, quidem aliquid blanditiis eaque
		voluptates explicabo porro et molestias eius ipsam debitis unde molestiae ducimus. Recusandae, deserunt non ducimus nulla saepe nesciunt
		quibusdam odit? Omnis, ut vitae!"
	</div>
);