import { Menu as MenuReact, MenuButton, MenuItem } from "@szhsin/react-menu";
import React from "react";
import { IMenuProps } from "./menu.interface";
import styles from "./menu.module.scss";
import clsx from "clsx";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";

export const Menu: React.FC<IMenuProps> = ({
	options,
	optionClassName,
	rootClassName,
	label,
	body,
	value,
	arrowIcon,
}) => {
	const [rotateArrow, setRotateArrow] = React.useState(false);
	return (
		<>
			<MenuReact
				onFocus={() => setRotateArrow(true)}
				onBlur={() => setRotateArrow(false)}
				className={clsx(styles.menu, rootClassName)}
				menuButton={
					<MenuButton className={styles.menuButton}>
						<div>{label}</div>
						{arrowIcon && (
							<ArrowDown className={clsx(rotateArrow && styles.rotate)} />
						)}
					</MenuButton>
				}
			>
				{body && body()}
				{!body &&
					options &&
					options.map((el) => {
						return (
							<MenuItem
								className={clsx(
									styles.optionMenu,
									optionClassName,
									value === el.label && styles.selected
								)}
								key={el.label}
								onClick={el.func}
							>
								{el.label}
							</MenuItem>
						);
					})}
			</MenuReact>
		</>
	);
};
