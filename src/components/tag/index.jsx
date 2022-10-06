import React from "react"
import PropTypes from "prop-types"

function Tag({ name, currentTag, onCurrentTag }) {
    return (
        <button onClick={() => {onCurrentTag(name)}}
            type="button"
            key={name}
            className={`px-2 bg-purple-200 border border-purple-400 rounded-md text-purple-600 ${ currentTag === name ? 'dark:bg-purple-200 dark:text-purple-600' : 'dark:bg-transparent'} dark:border-purple-400 dark:text-purple-200 dark:hover:bg-purple-200 dark:hover:text-purple-600`}
        >
            <small className="text-sm uppercase">{name}</small>
        </button>
    )
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
}

export default Tag
