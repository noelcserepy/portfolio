import { motion, useAnimationControls, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const primary = "#0D1823";
const secondary = "#556883";
const orange = "#BF4D00";
const lowContrastBlue = "#D4DBE8";

const mainVariants = {};

const ballVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
	fullScreen: {
		r: "300vh",
		transition: {
			duration: 0.3,
			ease: "easeIn",
		},
	},
};

const concentricVariants = {};

const radialVariants = {};

function MazeBackground({ showMenu }) {
	const mainControls = useAnimationControls();
	const ballControls = useAnimationControls();
	const concentricControls = useAnimationControls();
	const radialControls = useAnimationControls();

	useEffect(() => {
		const open = async () => {
			ballControls.set("visible");
			await ballControls.start("fullScreen");
			ballControls.set("hidden");
		};

		const close = async () => {
			ballControls.set("fullScreen");
			await ballControls.start("visible");
			ballControls.set("hidden");
		};

		if (showMenu) {
			open();
			return;
		}
		close();
	}, [showMenu]);

	return (
		<motion.svg
			className="absolute top-1/2 left-1/2 h-[80vh]  sm:h-[120vh] lg:w-screen -translate-x-1/2 -translate-y-1/2"
			viewBox="0 0 1161 1161"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<motion.g strokeWidth="2" strokeLinecap="square">
				{/* <motion.circle
					// CENTER CIRCLE
					className={"z-40"}
					variants={ballVariants}
					animate={ballControls}
					initial="hidden"
					fill={orange}
					stroke="none"
					r={0}
					cx={582}
					cy={582}
				/> */}
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M549.269 614.618C541.71 607.059 537.005 597.112 535.957 586.473C534.91 575.834 537.583 565.16 543.523 556.272C549.462 547.383 558.3 540.828 568.53 537.725C578.76 534.621 589.75 535.161 599.627 539.252C609.504 543.343 617.657 550.733 622.697 560.161C627.736 569.589 629.351 580.473 627.265 590.959C625.179 601.444 619.523 610.882 611.259 617.664C602.995 624.446 592.635 628.153 581.944 628.153"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M608.469 517.907C625.453 524.942 638.947 538.435 645.981 555.419"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M651.258 581.944C651.258 591.046 649.465 600.059 645.981 608.469"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M608.469 645.981C591.485 653.016 572.402 653.016 555.419 645.981C538.435 638.946 524.941 625.453 517.907 608.469C510.872 591.485 510.872 572.403 517.907 555.419C524.941 538.435 538.435 524.942 555.419 517.907"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 489.526C594.08 489.526 606.098 491.917 617.311 496.561C628.523 501.205 638.711 508.013 647.293 516.595"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M667.327 546.577C673.732 562.039 675.818 578.95 673.362 595.505C670.906 612.059 664.001 627.636 653.384 640.573C642.767 653.51 628.836 663.321 613.079 668.96C597.321 674.598 580.329 675.851 563.914 672.586C547.5 669.321 532.281 661.66 519.88 650.421C507.48 639.182 498.364 624.787 493.506 608.772C488.648 592.756 488.23 575.723 492.296 559.488C496.362 543.254 504.761 528.429 516.595 516.595"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M537.735 475.215C555.287 467.945 574.361 465.116 593.267 466.978C612.173 468.84 630.329 475.336 646.125 485.89"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M663.631 500.257C679.787 516.413 690.789 536.998 695.247 559.407"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M697.466 581.944C697.466 604.792 690.691 627.127 677.997 646.125C665.303 665.122 647.261 679.929 626.152 688.673"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M604.481 695.247C589.602 698.206 574.286 698.206 559.407 695.247"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M537.735 688.673C516.627 679.929 498.584 665.122 485.891 646.125"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M475.215 626.152C472.32 619.161 470.118 611.903 468.642 604.481"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M468.642 559.407C471.601 544.528 477.463 530.377 485.891 517.763C494.319 505.149 505.15 494.319 517.763 485.891"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 443.317C591.024 443.317 600.083 444.209 608.989 445.981"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M634.994 453.869C651.813 460.836 667.095 471.047 679.968 483.92C692.841 496.793 703.052 512.075 710.018 528.894"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M717.907 554.899C722.354 577.258 721.219 600.37 714.601 622.185C707.984 644.001 696.088 663.848 679.968 679.968"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M634.994 710.019C618.175 716.985 600.149 720.571 581.944 720.571"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M528.894 710.018C503.563 699.526 481.912 681.758 466.68 658.961C451.447 636.164 443.317 609.362 443.317 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M445.981 554.899C453.154 518.84 474.357 487.106 504.927 466.68"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M528.894 453.869C537.283 450.394 545.993 447.752 554.899 445.981"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M550.392 423.32C576.477 418.131 603.44 419.456 628.892 427.177C654.344 434.897 677.498 448.776 696.305 467.583"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M716.419 492.091C722.305 500.899 727.31 510.265 731.365 520.052"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M743.676 581.944C743.676 613.931 734.19 645.2 716.419 671.797"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M696.305 696.305C681.287 711.323 663.458 723.236 643.836 731.364"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M550.392 740.568C540.002 738.501 529.84 735.418 520.052 731.364"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M447.469 671.797C435.67 654.138 427.464 634.327 423.32 613.496"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M420.213 581.944C420.213 571.35 421.254 560.782 423.32 550.392"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M432.523 520.052C440.651 500.43 452.564 482.601 467.582 467.583"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M492.091 447.469C500.899 441.584 510.265 436.578 520.052 432.524"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M712.643 451.245C721.204 459.806 728.903 469.188 735.629 479.255"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M752.71 511.21C761.999 533.636 766.78 557.671 766.78 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M752.71 652.677C738.72 686.452 715.029 715.319 684.633 735.629"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M511.211 752.71C500.025 748.077 489.322 742.356 479.255 735.629"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M451.246 712.643C434.082 695.479 420.467 675.103 411.178 652.677C401.889 630.252 397.108 606.217 397.108 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M400.66 545.884C403.022 534.01 406.545 522.396 411.178 511.21"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M451.245 451.245C459.806 442.684 469.188 434.985 479.255 428.259"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M511.21 411.178C522.396 406.545 534.01 403.022 545.884 400.66"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M434.908 434.908C466.452 403.364 507.305 382.8 551.433 376.254C595.56 369.709 640.623 377.528 679.966 398.557"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M697.47 409.048C708.795 416.615 719.349 425.277 728.98 434.908"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M742.684 450.028C755.658 465.837 766.229 483.474 774.056 502.369"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M780.931 521.582C784.885 534.616 787.548 548.007 788.883 561.562"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M789.884 581.944C789.884 602.395 786.867 622.735 780.931 642.306"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M765.331 679.966C762.123 685.969 758.622 691.81 754.84 697.469"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M742.684 713.86C725.36 734.969 704.049 752.458 679.966 765.331"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M661.519 774.056C655.231 776.661 648.819 778.955 642.306 780.931"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M622.511 785.889C595.729 791.216 568.159 791.216 541.377 785.889"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M521.582 780.931C515.069 778.955 508.657 776.661 502.369 774.056"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M483.922 765.331C459.839 752.458 438.528 734.969 421.204 713.86"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M409.048 697.469C390.05 669.036 378.357 636.357 375.005 602.326"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M374.004 581.944C374.004 533.836 390.685 487.216 421.204 450.028"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M514.875 360.848C558.604 347.583 605.284 347.583 649.013 360.848"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M690.858 378.181C710.899 388.893 729.249 402.502 745.317 418.571"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M774.051 453.583C778.252 459.87 782.142 466.361 785.707 473.03"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M795.401 493.527C798.295 500.514 800.845 507.639 803.04 514.875"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M808.549 536.869C811.502 551.713 812.989 566.81 812.989 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M811.876 604.59C810.393 619.651 807.433 634.53 803.04 649.013"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M785.707 690.858C767.796 724.367 741.898 752.942 710.306 774.051"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M690.858 785.708C684.188 789.272 677.348 792.508 670.361 795.402"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M649.013 803.04C641.776 805.235 634.436 807.074 627.019 808.549"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M604.591 811.876C589.529 813.36 574.359 813.36 559.298 811.876"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M536.869 808.55C514.582 804.116 493.071 796.419 473.03 785.708"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M435.371 760.544C429.525 755.746 423.918 750.665 418.571 745.317"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M403.344 728.517C398.547 722.671 394.039 716.593 389.837 710.305"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M360.848 649.013C352.041 619.978 349.038 589.493 352.012 559.298"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M355.339 536.869C356.814 529.452 358.653 522.112 360.848 514.875"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M378.181 473.03C381.746 466.361 385.636 459.87 389.837 453.583"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M403.344 435.371C412.945 423.672 423.672 412.945 435.371 403.344"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M473.03 378.181C479.7 374.616 486.54 371.38 493.527 368.486"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M557.033 329.018C581.909 326.568 607.01 327.802 631.526 332.678"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M743.175 385.484C768.974 406.657 790.351 432.704 806.084 462.139"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M825.149 508.168C827.564 516.129 829.587 524.203 831.21 532.362"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M836.093 581.944C836.093 590.263 835.685 598.576 834.87 606.855"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M831.21 631.526C826.333 656.042 817.867 679.704 806.083 701.749"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M723.142 793.261C702.358 807.148 679.64 817.894 655.72 825.15"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M631.526 831.21C623.367 832.833 615.134 834.054 606.855 834.87"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M557.033 834.87C548.754 834.054 540.521 832.833 532.362 831.21"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M508.168 825.149C500.208 822.735 492.371 819.93 484.685 816.747"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M462.139 806.084C454.802 802.162 447.663 797.883 440.746 793.261"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M402.233 761.655C390.462 749.883 379.875 736.984 370.626 723.142"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M332.678 631.526C329.431 615.198 327.795 598.591 327.795 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M332.678 532.362C334.301 524.203 336.324 516.129 338.738 508.168"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M347.141 484.685C350.324 477 353.883 469.475 357.804 462.139"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M370.626 440.746C379.875 426.905 390.462 414.005 402.233 402.233"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M420.713 385.484C427.144 380.207 433.829 375.248 440.746 370.626"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M484.685 347.141C492.371 343.957 500.208 341.153 508.168 338.738"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M609.12 306.025C627.193 307.805 645.048 311.357 662.426 316.629"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M712.641 337.428C728.657 345.989 743.794 356.103 757.832 367.624"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M796.264 406.056C802.021 413.071 807.43 420.365 812.472 427.91"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M826.46 451.248C843.623 483.358 854.294 518.534 857.863 554.768"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M857.863 609.12C855.19 636.257 848.529 662.851 838.093 688.044"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M796.264 757.832C773.166 785.977 744.751 809.296 712.641 826.46"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M662.427 847.259C653.743 849.894 644.934 852.1 636.034 853.87"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M609.12 857.863C591.046 859.643 572.842 859.643 554.769 857.863"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M527.854 853.87C518.954 852.1 510.146 849.894 501.461 847.259"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M475.844 838.093C442.206 824.16 411.641 803.737 385.896 777.992"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M367.624 757.832C344.526 729.687 327.198 697.268 316.629 662.427"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M306.025 554.768C306.915 545.737 308.247 536.755 310.018 527.854"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M316.629 501.461C319.263 492.777 322.322 484.228 325.795 475.844"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M337.428 451.248C345.989 435.231 356.103 420.095 367.624 406.056"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M406.056 367.624C420.095 356.103 435.231 345.989 451.248 337.428"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M475.844 325.795C492.622 318.845 510.043 313.561 527.855 310.018"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M494.754 294.519C532.5 283.069 572.13 279.166 611.384 283.032"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M723.532 317.052C732.203 321.686 740.64 326.743 748.814 332.205"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M814.124 391.399C845.459 429.581 866.895 474.902 876.531 523.347"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M880.856 552.504C887.667 621.659 870.289 691.036 831.683 748.814"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M748.814 831.683C740.64 837.145 732.203 842.202 723.532 846.836"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M611.384 880.856C601.6 881.819 591.775 882.302 581.944 882.302"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M552.504 880.856C542.72 879.893 532.989 878.449 523.347 876.531"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M494.755 869.369C457.01 857.919 421.889 839.147 391.399 814.124"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M369.558 794.329C362.607 787.378 356.001 780.089 349.764 772.489"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M317.052 723.532C312.417 714.862 308.211 705.969 304.449 696.886"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M287.357 640.541C281.594 611.568 280.137 581.902 283.032 552.504"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M287.357 523.347C289.275 513.705 291.665 504.162 294.519 494.755"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M332.205 415.074C337.667 406.9 343.527 398.998 349.764 391.399"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M369.559 369.559C376.51 362.607 383.799 356.001 391.399 349.764"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M613.649 260.039C645.309 263.157 676.336 270.929 705.728 283.103"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M810.667 353.221C818.153 360.708 825.267 368.557 831.984 376.742"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M850.894 402.238C856.776 411.041 862.222 420.128 867.213 429.465"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M880.785 458.16C909.423 527.298 913.202 604.228 891.479 675.84"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M850.893 761.65C839.122 779.267 825.648 795.685 810.667 810.667"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M734.423 867.213C715.738 877.201 696.116 885.328 675.84 891.479"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 905.407C550.131 905.407 518.491 900.713 488.048 891.479"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M458.16 880.784C418.916 864.529 383.257 840.703 353.221 810.667"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M331.904 787.147C318.463 770.768 306.663 753.109 296.675 734.423"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M272.41 675.84C269.336 665.709 266.762 655.432 264.697 645.048"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M272.41 488.048C287.851 437.144 315.608 390.835 353.221 353.221C390.835 315.608 437.145 287.851 488.048 272.409"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M518.84 264.696C529.224 262.631 539.703 261.077 550.239 260.039"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M547.975 237.046C570.566 234.82 593.322 234.82 615.914 237.046"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M682.547 250.3C715.165 260.194 746.145 274.847 774.486 293.784"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M801.804 314.044C810.572 321.24 818.983 328.863 827.004 336.884"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M887.589 418.573C892.936 428.577 897.789 438.838 902.13 449.318"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M913.588 481.341C923.483 513.959 928.511 547.858 928.511 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M926.842 615.914C925.731 627.203 924.065 638.43 921.852 649.556"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M913.588 682.547C898.712 731.585 873.147 776.714 838.733 814.684C804.319 852.654 761.913 882.52 714.569 902.13"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M547.974 926.842C536.685 925.731 525.458 924.065 514.332 921.852"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M481.341 913.588C470.486 910.295 459.799 906.471 449.318 902.13"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M362.084 849.844C335.736 828.22 312.721 802.828 293.784 774.486"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M261.758 714.569C244.341 672.522 235.377 627.456 235.377 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M242.036 514.332C248.686 480.901 260.231 448.634 276.299 418.573"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M389.401 293.784C427.243 268.499 469.694 250.915 514.332 242.036"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M654.063 219.375C713.688 231.236 769.468 257.617 816.461 296.184"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M843.341 320.547C860.463 337.669 875.862 356.432 889.315 376.565"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M923.477 440.477C937.39 474.067 946.272 509.527 949.836 545.71"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M935.698 689.254C932.186 700.833 928.107 712.232 923.477 723.411"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M907.965 756.206C890.826 788.271 869.05 817.632 843.341 843.341"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M816.461 867.704C778.935 898.501 735.71 921.605 689.254 935.698"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M654.063 944.512C642.196 946.873 630.22 948.649 618.178 949.835"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 951.616C569.844 951.616 557.752 951.021 545.71 949.835"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M509.824 944.513C497.957 942.152 486.213 939.21 474.634 935.698"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M440.477 923.476C406.886 909.562 375.532 890.769 347.427 867.704"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M296.184 816.461C288.508 807.108 281.296 797.383 274.573 787.323"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M255.923 756.206C244.508 734.851 235.219 712.426 228.19 689.254"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M214.053 618.178C208.094 557.678 217.148 496.642 240.412 440.477"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M255.923 407.682C273.062 375.617 294.838 346.256 320.547 320.547"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M347.427 296.184C366.145 280.822 386.327 267.337 407.682 255.923"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M474.634 228.19C486.213 224.678 497.957 221.736 509.824 219.375"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M449.622 212.128C492.084 196.935 536.845 189.168 581.944 189.168"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M601.217 189.641C607.636 189.956 614.047 190.429 620.443 191.059"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M639.576 193.419C645.934 194.362 652.267 195.461 658.571 196.715"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M677.381 200.939C752.737 219.815 820.803 260.612 872.972 318.172"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M885.564 332.77C934.846 392.82 965.214 466.136 972.829 543.445"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M974.247 562.671C974.878 575.512 974.878 588.376 974.247 601.217"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M972.829 620.443C970.307 646.047 965.276 671.341 957.808 695.961"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M951.76 714.266C943.093 738.49 932.066 761.804 918.839 783.871"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M908.525 800.159C887.064 832.279 860.98 861.057 831.119 885.564"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M815.921 897.425C805.595 905.083 794.899 912.23 783.872 918.839"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M714.266 951.76C690.042 960.427 665.026 966.694 639.576 970.469"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M620.443 972.829C607.648 974.089 594.8 974.72 581.944 974.72"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M562.671 974.247C549.83 973.616 537.029 972.355 524.312 970.469"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M505.317 967.173C473.761 960.896 443.096 950.766 414.011 937.009"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M396.791 928.342C379.779 919.249 363.461 908.915 347.968 897.425"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M332.77 885.564C312.882 869.243 294.646 851.007 278.324 831.119"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M266.463 815.921C254.973 800.427 244.639 784.109 235.546 767.097"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M226.879 749.877C221.382 738.255 216.459 726.371 212.128 714.266"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M206.081 695.961C202.349 683.658 199.223 671.18 196.715 658.571"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M193.419 639.576C192.476 633.219 191.689 626.839 191.059 620.443"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M189.641 601.216C189.326 594.797 189.168 588.371 189.168 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M189.641 562.671C190.904 536.974 194.688 511.464 200.939 486.507"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M206.081 467.927C213.549 443.307 223.418 419.48 235.546 396.791"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M245.049 380.017C251.658 368.99 258.805 358.294 266.463 347.968"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M278.324 332.769C294.646 312.882 312.882 294.646 332.77 278.324"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M363.729 255.363C369.073 251.792 374.504 248.353 380.017 245.049"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M396.791 235.546C408.129 229.486 419.757 223.986 431.635 219.066"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 166.063C588.749 166.063 595.553 166.231 602.35 166.564"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M622.708 168.066C636.254 169.4 649.728 171.399 663.078 174.054"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M682.995 178.527C709.419 185.146 735.13 194.345 759.756 205.992"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M795.749 225.231C819.115 239.236 841.048 255.503 861.232 273.797"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M890.091 302.656C894.661 307.698 899.107 312.852 903.424 318.112"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M915.982 334.204C920.036 339.67 923.955 345.235 927.736 350.893"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M948.718 385.899C951.926 391.901 954.986 397.98 957.896 404.132"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M966.167 422.793C968.772 429.081 971.221 435.431 973.514 441.838"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M985.361 480.893C993.639 513.939 997.825 547.877 997.825 581.944"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M997.323 602.35C996.989 609.147 996.489 615.935 995.822 622.707"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M993.323 642.966C989.326 669.913 982.691 696.401 973.514 722.05"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M927.736 812.995C916.389 829.977 903.807 846.099 890.091 861.232"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M845.776 903.424C840.516 907.741 835.15 911.929 829.684 915.982"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M812.995 927.736C807.336 931.517 801.586 935.158 795.749 938.656"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M777.989 948.718C747.944 964.777 716.041 977.084 682.995 985.361"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M663.079 989.833C643.047 993.818 622.75 996.321 602.351 997.324"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 997.824C575.139 997.824 568.335 997.657 561.538 997.323"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M520.922 993.323C514.19 992.325 507.484 991.161 500.81 989.833"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M461.22 979.917C435.152 972.009 409.924 961.559 385.899 948.718"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M350.893 927.736C333.912 916.389 317.789 903.807 302.656 890.091"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M287.872 876.016C268.609 856.754 251.286 835.645 236.152 812.995"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M205.993 759.756C203.083 753.604 200.325 747.382 197.721 741.094"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M178.527 682.995C176.873 676.393 175.382 669.753 174.054 663.078"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M168.066 622.707C167.399 615.935 166.898 609.147 166.564 602.35"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M166.063 581.944C166.063 575.139 166.231 568.335 166.564 561.538"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M168.066 541.181C168.733 534.408 169.566 527.653 170.565 520.922"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M174.054 500.81C176.71 487.459 180.019 474.246 183.971 461.22"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M190.374 441.838C201.851 409.762 217.225 379.219 236.152 350.893"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M247.906 334.204C251.96 328.738 256.147 323.373 260.464 318.112"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M287.872 287.872C331.355 244.389 383.939 211.091 441.838 190.374"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M500.81 174.054C520.841 170.07 541.138 167.566 561.538 166.564"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M560.404 143.488C567.579 143.135 574.761 142.959 581.944 142.959"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M603.484 143.488C610.658 143.84 617.823 144.369 624.972 145.073"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M667.586 151.394C674.631 152.795 681.641 154.369 688.609 156.115"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M769.634 185.106C782.623 191.25 795.303 198.027 807.627 205.414"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M843.447 229.348C866.543 246.477 887.9 265.834 907.211 287.14"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M921.284 303.455C925.841 309.008 930.261 314.671 934.54 320.441"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M946.947 338.057C950.938 344.03 954.781 350.099 958.474 356.261"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M978.782 394.254C984.925 407.243 990.427 420.526 995.268 434.054"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1002.03 454.513C1012.47 488.924 1018.64 524.488 1020.4 560.404"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1020.93 581.944C1020.93 603.502 1019.34 625.031 1016.18 646.356"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1012.49 667.586C1011.09 674.631 1009.52 681.641 1007.77 688.609"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M995.268 729.833C992.848 736.597 990.262 743.3 987.513 749.936"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M978.782 769.634C972.638 782.623 965.861 795.303 958.474 807.627"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M907.211 876.748C902.387 882.071 897.433 887.274 892.354 892.353"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M769.634 978.782C756.645 984.925 743.362 990.427 729.833 995.268"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M688.609 1007.77C667.696 1013.01 646.427 1016.7 624.972 1018.82"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M603.484 1020.4C581.952 1021.46 560.371 1020.93 538.916 1018.81"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M517.531 1016.18C503.318 1014.07 489.217 1011.26 475.279 1007.77"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M413.952 987.513C407.315 984.764 400.747 981.853 394.254 978.782"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M375.008 969.094C330.556 945.334 290.527 914.095 256.678 876.748"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M229.348 843.447C203.628 808.768 183.165 770.485 168.62 729.833"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M143.488 603.484C142.43 581.952 142.96 560.371 145.073 538.916"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M147.71 517.531C148.764 510.426 149.993 503.347 151.394 496.302"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M156.115 475.279C157.86 468.311 159.776 461.387 161.861 454.513"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M185.106 394.254C191.25 381.265 198.027 368.585 205.414 356.26"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M216.941 338.057C220.932 332.084 225.069 326.211 229.348 320.441"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M242.604 303.455C251.719 292.348 261.375 281.695 271.535 271.535"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M287.14 256.678C292.462 251.854 297.902 247.161 303.455 242.604"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M320.441 229.348C331.982 220.789 343.936 212.801 356.261 205.414"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M375.008 194.794C387.68 188.02 400.677 181.873 413.952 176.375"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M434.054 168.62C454.352 161.357 475.158 155.6 496.302 151.394"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M649.747 124.856C657.226 125.965 664.677 127.258 672.093 128.733"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M694.223 133.703C708.894 137.378 723.377 141.771 737.617 146.866"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M758.778 155.029C765.764 157.922 772.678 160.987 779.513 164.22"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M838.667 197.73C844.954 201.931 851.137 206.286 857.21 210.79"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M924.33 271.624C929.408 277.226 934.348 282.952 939.144 288.797"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M953.098 306.677C966.616 324.905 978.773 344.103 989.47 364.116"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1017.02 426.271C1029.77 461.91 1038.1 498.981 1041.81 536.651"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1043.48 559.271C1044.22 574.377 1044.22 589.511 1043.48 604.618"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1041.81 627.237C1040.33 642.289 1038.11 657.259 1035.15 672.093"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1030.19 694.223C1026.51 708.894 1022.12 723.377 1017.02 737.617"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1008.86 758.778C1000.17 779.744 989.958 800.041 978.292 819.506"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M939.144 875.091C934.348 880.936 929.408 886.662 924.33 892.264"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M908.691 908.69C897.996 919.385 886.783 929.549 875.091 939.144"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M799.772 989.471C793.103 993.035 786.348 996.435 779.513 999.668"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M758.778 1008.86C709.76 1029.16 657.611 1040.87 604.618 1043.48"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M536.651 1041.81C521.599 1040.33 506.629 1038.11 491.795 1035.15"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M447.806 1024.14C440.571 1021.94 433.39 1019.57 426.271 1017.02"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M384.375 999.668C370.702 993.201 357.355 986.067 344.382 978.292"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M325.221 966.157C318.934 961.956 312.751 957.602 306.678 953.098"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M288.797 939.144C271.255 924.748 254.798 909.079 239.558 892.264"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M224.744 875.091C215.149 863.399 206.133 851.243 197.73 838.667"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M185.597 819.506C158.32 773.997 139.084 724.131 128.733 672.093"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M128.733 491.795C130.209 484.379 131.865 477 133.703 469.666"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M139.752 447.807C141.947 440.571 144.319 433.39 146.866 426.271"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M155.029 405.11C160.817 391.136 167.287 377.455 174.417 364.116"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M185.597 344.382C189.484 337.897 193.53 331.508 197.731 325.221"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M255.197 255.197C260.544 249.851 266.021 244.636 271.624 239.558"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M288.797 224.744C300.489 215.149 312.645 206.133 325.221 197.73"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M344.382 185.596C350.868 181.709 357.448 177.982 364.116 174.417"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M426.271 146.866C433.39 144.319 440.571 141.947 447.806 139.752"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M491.795 128.733C499.211 127.258 506.662 125.965 514.141 124.856"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M676.601 106.073C684.387 107.622 692.135 109.361 699.836 111.291"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M745.401 125.112C752.877 127.787 760.285 130.645 767.62 133.683"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M810.663 154.041C859.795 180.302 904.037 214.829 941.449 256.108"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M957.004 274.14C972.12 292.559 985.859 312.067 998.109 332.504"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1046.25 441.1C1053.16 463.901 1058.39 487.181 1061.89 510.751"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1064.8 534.387C1069.48 581.877 1067.13 629.798 1057.82 676.601"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1046.25 722.789C1043.94 730.386 1041.45 737.926 1038.78 745.401"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1020.55 789.391C1017.16 796.568 1013.59 803.661 1009.85 810.663"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M998.109 831.384C994.027 838.194 989.779 844.902 985.368 851.504"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M957.004 889.748C921.662 932.812 879.168 969.468 831.384 998.109"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M810.663 1009.85C768.577 1032.34 723.404 1048.51 676.601 1057.82"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M629.501 1064.8C613.697 1066.36 597.825 1067.14 581.944 1067.14"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M487.287 1057.82C479.5 1056.27 471.753 1054.53 464.051 1052.6"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M418.487 1038.78C403.535 1033.43 388.853 1027.34 374.497 1020.55"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M353.225 1009.85C339.219 1002.36 325.589 994.191 312.385 985.368"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M292.914 971.655C286.537 966.926 280.277 962.041 274.14 957.004"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M256.107 941.449C238.452 925.447 222 908.167 206.884 889.748"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M192.232 870.974C178.038 851.835 165.273 831.677 154.041 810.663"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M143.334 789.391C129.745 760.661 119.013 730.666 111.291 699.837"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M99.0863 629.501C96.7508 605.788 96.1653 581.936 97.3344 558.137"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M99.0864 534.387C99.8646 526.486 100.837 518.605 102.002 510.751"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M106.073 487.287C112.273 456.117 121.521 425.63 133.683 396.268"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M154.041 353.225C165.273 332.211 178.038 312.053 192.232 292.914"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M238.86 238.86C250.09 227.63 261.864 216.959 274.14 206.884"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M292.914 192.232C305.67 182.772 318.883 173.944 332.504 165.779"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M353.225 154.041C374.239 142.809 396.052 133.14 418.487 125.112"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M441.1 117.642C456.297 113.032 471.711 109.171 487.287 106.073"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M510.751 102.001C518.605 100.836 526.486 99.8644 534.387 99.0862"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M557.003 74.2578C573.62 73.4414 590.268 73.4414 606.885 74.2578"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M656.527 79.147C664.754 80.3674 672.95 81.7896 681.108 83.4122"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M729.495 95.5327C793.372 114.909 852.806 146.678 904.405 189.024"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M958.568 240.592C975.332 259.087 990.71 278.793 1004.58 299.548"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1068.36 434.393C1070.77 442.352 1072.99 450.369 1075.01 458.437"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1087.79 532.122C1090.24 556.964 1090.86 581.953 1089.63 606.885"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1087.8 631.766C1084.53 664.9 1078.02 697.634 1068.36 729.495"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1030.22 821.554C990.819 895.274 933.843 958.139 864.34 1004.58"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M843.262 1017.93C836.128 1022.2 828.89 1026.3 821.554 1030.22"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M799.27 1041.44C791.751 1045 784.146 1048.37 776.461 1051.55"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M753.184 1060.53C737.519 1066.13 721.589 1070.97 705.45 1075.01"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M606.885 1089.63C590.268 1090.45 573.62 1090.45 557.003 1089.63"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M532.122 1087.79C515.565 1086.16 499.097 1083.72 482.78 1080.48"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M458.437 1075.01C450.369 1072.99 442.352 1070.77 434.393 1068.36"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M410.704 1060.53C402.872 1057.73 395.111 1054.73 387.427 1051.55"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M364.619 1041.44C357.1 1037.88 349.669 1034.14 342.334 1030.22"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M320.626 1017.93C313.492 1013.65 306.464 1009.2 299.548 1004.58"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M222.523 941.365C216.642 935.484 210.905 929.459 205.32 923.296"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M173.675 884.737C153.841 857.995 136.683 829.368 122.448 799.27"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M103.359 753.184C100.557 745.353 97.9471 737.454 95.5327 729.495"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M79.1472 656.527C77.9268 648.299 76.9085 640.043 76.0933 631.766"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M73.6455 581.944C73.6455 565.307 74.4624 548.679 76.0931 532.122"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M79.147 507.361C81.5882 490.904 84.8359 474.576 88.8785 458.438"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M95.5327 434.393C97.9471 426.433 100.557 418.535 103.359 410.703"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M133.665 342.334C137.585 334.998 141.686 327.76 145.962 320.626"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M159.309 299.548C177.807 271.865 198.98 246.066 222.523 222.523"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M320.626 145.962C327.761 141.686 334.999 137.586 342.334 133.665"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M364.618 122.448C372.137 118.891 379.742 115.52 387.426 112.337"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M410.704 103.358C426.368 97.7535 442.299 92.921 458.438 88.8784"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M482.78 83.4122C490.937 81.7896 499.134 80.3674 507.361 79.147"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M581.944 50.541C590.639 50.541 599.334 50.7544 608.019 51.1811"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M711.064 66.4666C753.29 77.0435 794.056 92.7686 832.446 113.288"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M877.176 140.099C927.908 173.997 972.424 216.38 1008.77 265.388"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1037.74 308.748C1042.21 316.207 1046.5 323.774 1050.6 331.442"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1082.28 402.92C1091.08 427.491 1098.04 452.677 1103.14 478.272"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1107.6 503.971C1108.87 512.572 1109.94 521.204 1110.79 529.857"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1112.71 608.019C1112.28 616.704 1111.64 625.377 1110.79 634.031"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1107.6 659.917C1106.32 668.518 1104.83 677.087 1103.14 685.616"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1090.46 736.202C1087.94 744.523 1085.21 752.781 1082.28 760.969"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1062.33 809.148C1058.61 817.009 1054.7 824.777 1050.6 832.446"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1008.77 898.5C993.225 919.462 976.156 939.249 957.703 957.702"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M919.063 992.724C912.341 998.24 905.485 1003.59 898.5 1008.77"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M877.176 1023.79C869.946 1028.62 862.598 1033.27 855.14 1037.74"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M785.303 1072.9C777.27 1076.22 769.155 1079.35 760.968 1082.28"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M736.202 1090.46C686.188 1105.64 634.209 1113.35 581.944 1113.35"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M555.869 1112.71C538.496 1111.85 521.176 1110.15 503.971 1107.6"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M478.273 1103.14C469.744 1101.44 461.259 1099.53 452.824 1097.42"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M427.686 1090.47C411.041 1085.42 394.655 1079.55 378.585 1072.9"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M331.442 1050.6C323.773 1046.5 316.206 1042.21 308.748 1037.74"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M265.388 1008.77C251.417 998.41 237.964 987.369 225.076 975.688"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M188.2 938.812C164.825 913.021 144.04 884.996 126.145 855.14"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M81.6047 760.968C63.9972 711.759 53.7457 660.221 51.1812 608.019"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M53.1001 529.857C54.805 512.548 57.3587 495.332 60.752 478.272"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M90.9917 378.585C97.6479 362.515 105.089 346.782 113.288 331.442"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M171.164 244.825C176.68 238.104 182.361 231.518 188.2 225.075"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M225.076 188.2C237.964 176.52 251.417 165.479 265.388 155.117"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M286.712 140.099C293.942 135.268 301.29 130.615 308.748 126.145"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M331.442 113.288C346.782 105.089 362.515 97.6479 378.585 90.9917"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M452.824 66.4664C461.259 64.3536 469.744 62.4481 478.273 60.7517"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M420.979 51.3134C481.906 32.8315 545.561 24.9804 609.152 28.1045"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M690.123 38.0913C699.022 39.8615 707.877 41.8498 716.678 44.0545"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M768.752 59.8508C785.841 65.9653 802.619 72.9152 819.026 80.6752"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M843.337 92.9121C891.434 118.621 935.476 151.284 974.04 189.848"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1027.33 251.624C1032.73 258.912 1037.96 266.332 1043 273.876"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1070.98 320.551C1075.25 328.553 1079.33 336.659 1083.21 344.862"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1094.24 369.743C1097.71 378.126 1100.98 386.593 1104.04 395.136"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1133.78 527.593C1134.67 536.623 1135.34 545.673 1135.78 554.736"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1133.78 636.295C1132.89 645.325 1131.78 654.332 1130.45 663.307"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1125.8 690.123C1118.71 725.747 1108.14 760.588 1094.24 794.145"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1070.98 843.337C1062.42 859.344 1053.08 874.921 1043 890.012"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M1027.33 912.264C1021.92 919.552 1016.34 926.706 1010.58 933.72"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M974.04 974.04C967.624 980.456 961.052 986.713 954.329 992.807"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M912.264 1027.33C904.976 1032.73 897.556 1037.96 890.012 1043"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M867.018 1057.56C851.451 1066.89 835.434 1075.45 819.027 1083.21"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M794.145 1094.24C743.759 1115.11 690.57 1128.44 636.295 1133.78"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M609.152 1135.78C591.024 1136.67 572.863 1136.67 554.735 1135.78"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M527.593 1133.78C509.53 1132 491.566 1129.34 473.765 1125.8"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M447.21 1119.83C429.604 1115.42 412.225 1110.15 395.136 1104.04"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M273.876 1043C266.332 1037.96 258.912 1032.73 251.625 1027.33"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M209.56 992.807C189.383 974.519 170.58 954.77 153.304 933.72"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M69.646 794.145C34.7494 709.897 21.1687 618.343 30.1068 527.593"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M33.4385 500.581C38.768 464.652 47.6146 429.334 59.851 395.136"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M80.6753 344.861C88.4354 328.454 96.9963 312.438 106.327 296.87"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M153.304 230.168C164.818 216.138 177.014 202.682 189.848 189.848"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M251.625 136.559C258.912 131.154 266.332 125.929 273.876 120.888"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M296.87 106.327C312.438 96.9961 328.454 88.4351 344.861 80.675"
				/>
				<motion.path
					variants={concentricVariants}
					animate={concentricControls}
					initial="hidden"
					d="M610.286 5.02779C762.068 12.4843 904.796 79.4548 1007.54 191.425C1110.28 303.395 1164.76 451.343 1159.16 603.204C1153.57 755.066 1088.36 898.605 977.657 1002.71C866.956 1106.82 719.687 1163.11 567.769 1159.38C415.85 1155.65 271.521 1092.2 166.062 982.79C60.603 873.375 2.51074 726.809 4.37558 574.856C6.24042 422.903 67.9121 277.806 176.025 171.012C284.137 64.2185 429.98 4.33203 581.944 4.33203"
				/>
			</motion.g>
			<motion.g strokeWidth="2" strokeLinecap="square">
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 96.75V212.272"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 258.481V281.586"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 304.69V327.795"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 397.108V443.317"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 489.526V535.735"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M609.152 28.1047L608.019 51.1814"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M606.885 74.2578L603.484 143.488"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M636.295 30.1067L622.708 168.066"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M620.443 191.059L615.914 237.046"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M611.384 283.032L609.12 306.025"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M666.697 10.584L646.356 147.71"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M642.966 170.565L639.576 193.419"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M690.123 38.0913L681.108 83.4124"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M667.586 151.394L663.078 174.055"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M658.571 196.715L640.541 287.357"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M622.511 377.999L618.004 400.66"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M711.064 66.4666L688.608 156.115"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M682.995 178.527L677.381 200.939"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M749.616 29.2041L736.202 73.4233"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M729.495 95.5327L722.789 117.642"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M709.375 161.862L702.668 183.971"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M669.133 294.519L655.72 338.739"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M745.401 125.113L729.833 168.62"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M758.778 155.029L741.095 197.721"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M705.728 283.104L661.52 389.832"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M652.678 411.178L643.836 432.524"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M828.905 59.7891L819.026 80.6753"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M799.27 122.448L779.513 164.22"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M810.663 154.041L777.989 215.17"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M734.423 296.676L723.532 317.052"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M712.64 337.428L701.749 357.805"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M867.018 106.327L843.262 145.962"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M819.506 185.597L807.627 205.414"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M838.667 197.731L812.995 236.152"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M787.322 274.573L748.814 332.205"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M735.978 351.416L710.306 389.837"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M697.469 409.048L671.797 447.469"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M658.961 466.68L646.125 485.891"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M857.211 210.79L843.447 229.348"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M889.748 206.884L875.09 224.744"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M801.804 314.044L757.832 367.624"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M938.812 188.2L907.78 222.439"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M892.264 239.558L876.748 256.678"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M861.232 273.797L845.716 290.916"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M957.702 206.186L941.365 222.523"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M925.028 238.86L908.69 255.197"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M892.353 271.535L876.016 287.872"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M859.679 304.209L827.004 336.884"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M810.666 353.221L761.654 402.233"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M745.317 418.571L728.98 434.908"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M696.306 467.583L679.968 483.92"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M663.631 500.258L630.956 532.932"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1009.93 194.044L975.688 225.076"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M958.569 240.592L941.449 256.108"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M924.33 271.624L907.21 287.14"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M890.091 302.656L872.972 318.172"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1028.44 215.511L1010.58 230.168"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M957.004 274.14L939.144 288.798"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M921.284 303.455L885.564 332.77"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M849.844 362.084L831.984 376.742"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M814.124 391.399L796.264 406.056"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M778.404 420.713L742.684 450.028"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M934.54 320.441L915.982 334.204"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1043 273.876L1004.58 299.549"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M889.315 376.566L831.683 415.074"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M735.629 479.255L716.418 492.091"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1077.38 284.992L1057.56 296.87"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1037.74 308.749L998.109 332.505"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M958.474 356.261L918.839 380.017"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1070.98 320.551L948.718 385.899"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M928.342 396.791L907.965 407.682"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M826.46 451.248L806.084 462.139"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M785.707 473.03L765.331 483.922"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1083.21 344.862L978.782 394.254"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1094.24 369.743L1008.86 405.11"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M923.476 440.477L880.785 458.16"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M838.093 475.844L795.401 493.527"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M774.056 502.369L752.71 511.211"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M731.364 520.052L710.019 528.894"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1104.04 395.136L1060.53 410.704"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1038.78 418.487L1017.02 426.271"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M995.268 434.054L973.514 441.838"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1134.68 414.272L1112.57 420.979"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1068.36 434.393L1046.25 441.1"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1002.03 454.513L957.807 467.927"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M825.15 508.168L780.931 521.582"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1119.83 447.21L1097.42 452.824"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1148.46 469.258L1080.48 482.78"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M899.191 518.84L876.531 523.347"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M763.229 545.884L695.247 559.407"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1130.45 500.581L1061.89 510.751"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1156.77 525.328L1133.78 527.593"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1110.79 529.858L1041.81 536.652"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M880.856 552.504L811.876 559.298"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1135.78 554.736L1112.71 555.869"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1043.48 559.271L1020.4 560.404"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M997.324 561.538L974.247 562.672"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1159.56 581.944H1113.35"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1020.93 581.944H997.825"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M974.72 581.944H928.511"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M882.302 581.944H836.093"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M674.362 581.944H651.257"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1158.86 610.286L1089.63 606.885"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M997.324 602.35L974.247 601.217"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1110.79 634.031L1087.79 631.766"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1041.81 627.237L1018.82 624.972"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M972.829 620.443L949.835 618.178"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M926.842 615.914L903.849 613.649"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M834.869 606.855L811.876 604.591"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1153.3 666.697L1107.6 659.917"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1016.18 646.357L970.469 639.576"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M944.513 654.063L921.852 649.556"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M853.87 636.034L831.21 631.526"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M763.228 618.004L740.567 613.496"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1119.83 716.678L1007.77 688.609"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1002.03 709.375L979.917 702.668"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M957.807 695.961L891.479 675.84"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M803.04 649.013L780.931 642.306"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1082.28 760.968L1017.02 737.617"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M995.268 729.834L973.514 722.05"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1094.24 794.145L1008.86 758.778"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M966.168 741.095L944.822 732.253"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M880.785 705.728L859.439 696.886"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M816.747 679.203L752.71 652.678"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1104.1 828.905L1041.44 799.27"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M978.782 769.635L957.896 759.756"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1030.22 821.554L1009.85 810.663"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M948.718 777.989L907.965 756.206"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M887.589 745.315L867.212 734.423"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M846.837 723.532L806.084 701.749"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M785.707 690.858L765.331 679.967"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1057.56 867.018L1017.93 843.262"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M998.109 831.384L918.839 783.872"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1043 890.012L1023.79 877.176"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M966.157 838.667L908.525 800.159"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M850.893 761.65L831.683 748.814"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M812.472 735.978L774.051 710.306"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M735.629 684.633L716.418 671.797"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1045.89 926.027L1027.33 912.264"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1008.77 898.501L934.54 843.448"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M957.004 889.748L903.424 845.776"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M814.124 772.489L778.404 743.175"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M760.544 728.517L742.684 713.86"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M1009.93 969.845L992.807 954.329"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M974.04 974.04L957.703 957.703"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M892.353 892.354L859.679 859.679"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M843.341 843.341L827.004 827.004"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M810.666 810.667L794.329 794.329"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M761.655 761.655L745.317 745.318"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M696.306 696.306L679.968 679.968"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M647.293 647.294L614.619 614.619"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M938.812 975.688L923.296 958.569"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M892.264 924.33L845.716 872.972"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M948.377 1028.44L919.062 992.724"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M875.09 939.144L860.433 921.284"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M831.119 885.564L816.461 867.704"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M801.804 849.844L743.174 778.404"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M870.974 971.656L815.92 897.425"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M890.012 1043L864.339 1004.58"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M851.503 985.368L825.831 946.947"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M774.486 870.104L748.814 831.683"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M723.142 793.261L710.306 774.051"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M671.797 716.419L646.125 677.998"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M867.018 1057.56L855.14 1037.74"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M843.262 1017.93L831.384 998.109"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M819.505 978.291L783.871 918.839"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M832.445 1050.6L810.663 1009.85"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M799.771 989.471L767.097 928.342"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M690.858 785.707L679.966 765.331"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M828.905 1104.1L799.27 1041.44"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M789.391 1020.55L779.513 999.668"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M759.756 957.896L749.877 937.01"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M758.778 1008.86L749.936 987.513"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M732.253 944.822L723.411 923.476"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M705.728 880.785L679.203 816.747"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M652.678 752.71L643.836 731.365"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M768.752 1104.04L745.401 1038.78"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M716.082 1024.14L702.668 979.917"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M689.254 935.698L675.84 891.479"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M669.133 869.369L662.426 847.26"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M655.72 825.15L642.306 780.931"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M681.108 1080.48L676.601 1057.82"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M663.078 989.834L658.571 967.173"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M654.063 944.513L627.019 808.549"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M622.511 785.889L608.989 717.907"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M659.917 1107.6L653.137 1061.89"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M636.295 1133.78L634.031 1110.79"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M631.766 1087.8L627.237 1041.81"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M624.972 1018.82L622.708 995.822"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M620.443 972.829L611.384 880.856"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M604.59 811.877L602.326 788.883"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M602.35 997.324L601.217 974.247"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 1067.14V997.825"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 928.511V882.302"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 859.198V812.989"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 766.78V720.571"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 697.467V674.362"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M581.944 651.258V628.153"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M553.602 1158.86L559.27 1043.48"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M561.538 997.324L562.671 974.247"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M532.122 1087.8L538.916 1018.82"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M541.181 995.822L547.975 926.843"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M552.504 880.856L554.769 857.863"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M500.581 1130.45L503.971 1107.6"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M510.751 1061.89L514.142 1039.03"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M517.532 1016.18L520.922 993.323"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M478.272 1103.14L487.287 1057.82"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M509.825 944.513L514.332 921.852"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M527.854 853.871L559.407 695.247"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M447.209 1119.83L452.823 1097.42"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M464.051 1052.6L469.665 1030.19"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M475.279 1007.77L486.507 962.949"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M427.686 1090.47L441.1 1046.25"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M447.807 1024.14L461.22 979.917"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M481.341 913.588L501.461 847.26"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M410.704 1060.53L434.055 995.268"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M360.901 1115.59L378.585 1072.9"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M405.11 1008.86L422.793 966.167"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M431.635 944.822L449.319 902.13"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M475.844 838.093L484.685 816.747"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M493.527 795.402L502.369 774.056"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M528.894 710.019L537.735 688.673"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M334.983 1104.1L344.861 1083.21"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M354.74 1062.33L364.618 1041.44"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M374.497 1020.55L384.376 999.668"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M320.551 1070.98L353.225 1009.85"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M385.899 948.718L396.791 928.342"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M418.573 887.589L429.465 867.213"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M462.139 806.084L473.03 785.708"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M296.87 1057.56L308.748 1037.74"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M356.261 958.474L380.017 918.839"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M261.04 1062.21L299.549 1004.58"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M312.385 985.368L325.221 966.157"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M376.565 889.315L402.238 850.894"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M453.583 774.051L492.091 716.419"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M265.388 1008.77L292.914 971.656"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M306.678 953.098L320.441 934.541"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M215.511 1028.44L230.168 1010.58"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M259.483 974.864L288.798 939.144"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M318.112 903.424L347.427 867.704"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M406.056 796.264L420.713 778.404"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M225.076 975.688L256.108 941.449"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M189.848 974.04L222.523 941.365"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M271.535 892.353L287.872 876.016"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M320.547 843.341L336.884 827.004"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M369.559 794.329L385.896 777.992"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M402.233 761.655L418.571 745.318"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M434.908 728.98L467.582 696.305"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M205.32 923.297L222.439 907.781"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M171.164 919.063L189.024 904.405"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M206.884 889.748L260.464 845.776"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M278.324 831.119L296.184 816.461"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M349.764 772.489L385.484 743.175"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M403.344 728.517L421.204 713.86"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M118.002 926.027L155.117 898.5"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M247.906 829.684L266.463 815.92"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M101.677 902.848L120.888 890.012"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M178.52 851.503L197.731 838.667"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M274.573 787.322L293.784 774.486"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M312.995 761.65L332.205 748.814"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M106.327 867.018L145.962 843.262"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M205.414 807.628L245.049 783.872"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M72.5356 854.229L113.288 832.446"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M154.041 810.663L174.417 799.772"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M194.793 788.88L215.17 777.989"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M235.546 767.097L296.675 734.423"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M337.428 712.641L398.557 679.967"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M80.6753 819.027L143.334 789.391"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M205.992 759.756L226.878 749.877"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M48.3003 802.987L112.338 776.462"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M261.758 714.57L304.449 696.886"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M347.141 679.203L389.832 661.52"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M475.215 626.153L496.561 617.311"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M168.62 729.834L212.128 714.267"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M73.4229 736.202L95.5325 729.495"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M139.752 716.082L206.081 695.961"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M272.41 675.84L360.848 649.013"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M88.8784 705.451L111.29 699.837"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M156.115 688.609L178.527 682.995"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M60.752 685.616L174.055 663.078"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M196.715 658.571L264.696 645.049"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M287.357 640.541L332.678 631.526"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M400.66 618.004L423.32 613.496"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M79.147 656.527L193.419 639.576"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M76.0933 631.766L145.073 624.972"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M260.039 613.649L306.025 609.12"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M51.1812 608.019L74.2578 606.885"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M97.3345 605.751L120.411 604.618"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M143.488 603.484L189.641 601.217"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M27.4365 581.944H50.541"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M73.6455 581.944H96.75"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M119.854 581.944H142.959"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M189.168 581.944H212.272"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M235.377 581.944H258.481"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M304.69 581.944H327.795"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M350.899 581.944H397.108"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M420.212 581.944H443.317"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M466.421 581.944H489.526"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M51.1812 555.869L74.2578 557.003"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M97.3345 558.137L120.411 559.27"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M166.564 561.538L189.641 562.672"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M30.1064 527.593L53.0997 529.857"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M76.0933 532.122L99.0865 534.387"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M122.08 536.651L145.073 538.916"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M214.052 545.71L352.012 559.298"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M56.2925 503.971L79.1469 507.361"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M102.001 510.751L193.419 524.312"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M106.073 487.287L128.733 491.795"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M151.394 496.302L174.055 500.81"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M242.036 514.332L264.697 518.84"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M332.678 532.362L355.339 536.87"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M400.66 545.884L468.641 559.407"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M44.0542 447.21L88.8783 458.438"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M133.703 469.666L156.115 475.279"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M73.4229 427.686L95.5325 434.393"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M117.642 441.1L139.752 447.806"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M183.971 461.22L206.081 467.927"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M272.41 488.048L338.738 508.168"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M59.8506 395.136L103.358 410.704"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M146.866 426.271L190.374 441.838"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M48.3003 360.902L133.683 396.268"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M155.029 405.11L176.375 413.952"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M219.066 431.635L240.412 440.477"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M304.449 467.002L325.795 475.844"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M347.141 484.686L389.832 502.369"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M411.178 511.21L432.523 520.052"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M101.562 354.74L164.22 384.376"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M255.923 407.682L276.299 418.573"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M296.675 429.465L317.052 440.356"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M337.428 451.248L357.805 462.139"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M106.327 296.87L205.414 356.261"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M101.677 261.04L159.309 299.549"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M216.941 338.057L236.152 350.893"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M255.363 363.729L274.573 376.565"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M293.784 389.402L312.995 402.238"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M332.205 415.074L351.416 427.91"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M370.626 440.746L389.837 453.583"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M409.048 466.419L428.259 479.255"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M118.002 237.861L136.56 251.624"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M155.117 265.388L173.675 279.151"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M192.232 292.914L229.348 320.441"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M247.906 334.204L266.463 347.968"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M153.304 230.168L171.164 244.826"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M189.024 259.483L224.744 288.798"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M242.604 303.455L278.324 332.77"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M314.044 362.084L331.904 376.742"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M403.344 435.371L421.204 450.028"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M222.439 256.108L273.797 302.656"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M189.848 189.848L222.523 222.523"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M238.86 238.86L255.197 255.197"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M287.872 287.872L304.209 304.209"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M320.547 320.547L336.884 336.884"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M353.221 353.221L418.571 418.571"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M194.043 153.962L240.592 205.32"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M271.624 239.558L302.656 273.797"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M215.511 135.444L230.168 153.304"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M259.483 189.024L288.798 224.744"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M332.77 278.324L376.742 331.904"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M251.625 136.56L292.914 192.233"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M306.678 210.79L320.441 229.348"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M334.204 247.906L347.967 266.463"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M286.712 140.099L299.549 159.309"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M363.729 255.363L376.566 274.573"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M402.238 312.995L427.91 351.416"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M440.746 370.627L479.255 428.259"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M492.091 447.469L504.927 466.68"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M296.87 106.327L308.748 126.145"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M344.382 185.597L356.26 205.414"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M331.442 113.289L364.117 174.418"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M385.899 215.17L396.791 235.546"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M440.356 317.052L473.031 378.181"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M334.983 59.7891L344.861 80.6753"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M384.375 164.22L394.254 185.106"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M369.743 69.646L387.427 112.337"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M396.268 133.683L413.951 176.375"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M431.635 219.066L449.319 261.758"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M467.002 304.449L484.685 347.141"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M511.21 411.178L555.419 517.907"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M387.353 38.0972L410.704 103.359"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M426.271 146.866L441.838 190.374"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M420.979 51.3135L427.686 73.4231"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M441.1 117.642L447.806 139.752"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M461.22 183.971L467.927 206.081"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M508.168 338.739L521.582 382.958"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M452.824 66.4666L458.438 88.8786"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M469.666 133.703L480.893 178.527"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M478.272 60.752L491.795 128.734"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M496.302 151.394L500.81 174.055"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M509.825 219.376L514.332 242.036"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M518.839 264.697L523.347 287.357"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M527.854 310.018L532.362 332.678"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M500.581 33.4385L503.971 56.2929"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M514.142 124.856L517.532 147.71"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M529.857 53.1001L541.181 168.066"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M543.445 191.059L550.239 260.039"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M552.504 283.032L557.033 329.019"
				/>
				<motion.path
					variants={radialVariants}
					animate={radialControls}
					initial="hidden"
					d="M554.735 28.1047L560.404 143.488"
				/>
			</motion.g>
		</motion.svg>
	);
}

export default MazeBackground;
