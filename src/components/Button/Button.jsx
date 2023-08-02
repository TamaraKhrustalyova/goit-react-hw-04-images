import { LoadMoreBtn } from "./Button.styled";
import PropTypes from 'prop-types';

export const Button = ({onClick}) => {
    return (
        <LoadMoreBtn onClick={onClick}>Load More</LoadMoreBtn>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};