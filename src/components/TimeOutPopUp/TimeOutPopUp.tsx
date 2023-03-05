import React, {
	useEffect,
	useCallback,
	ReactNode,
	Dispatch,
	SetStateAction,
} from "react";
import { TimeOutPopUpCloseButton, TimeOutPopUpElement } from "./style";

interface ITimeOutPopUp {
	children?: ReactNode;
	timer?: number;
	usePopUp: [boolean, Dispatch<SetStateAction<boolean>>];
}

export const TimeOutPopUp = ({ children, timer, usePopUp }: ITimeOutPopUp) => {
	const [isOpen, setIsOpen] = usePopUp;

	const startTimerToAutoClose = useCallback(() => {
		isOpen && setIsOpen(false);
	}, [isOpen, setIsOpen]);

	useEffect(() => {
		setTimeout(() => {
			startTimerToAutoClose();
		}, timer || 4000);
	}, [isOpen]);

	return (
		<TimeOutPopUpElement isOpen={isOpen}>
			<TimeOutPopUpCloseButton
				onClick={() => setIsOpen(false)}></TimeOutPopUpCloseButton>
			{children}
		</TimeOutPopUpElement>
	);
};
