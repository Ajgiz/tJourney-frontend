import { Menu as MenuReact, MenuButton, MenuItem } from "@szhsin/react-menu";
import React from "react";
import { IMenuProps } from "./menu.interface";
import styles from "./menu.module.scss";
import clsx from "clsx";
export const Menu: React.FC<IMenuProps> = ({
	options,
	optionClassName,
	rootClassName,
	label,
	body,
	value,
}) => {
	return (
		<>
			<MenuReact
				className={clsx(styles.menu, rootClassName)}
				menuButton={
					<MenuButton className={styles.menuButton}>{label}</MenuButton>
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
