import React from "react"
import PropTypes from "prop-types"

function Tag({ name, currentTag, onCurrentTag }) {
    return (
        <button
            onClick={() => {
                onCurrentTag(name)
            }}
            type="button"
            key={name}
            className={`px-2 ${currentTag === name ? 'bg-purple-400 text-white' : 'bg-purple-200 text-purple-600'} border border-purple-400 rounded-md ${currentTag === name ? 'dark:bg-purple-200 dark:text-purple-600' : 'dark:bg-transparent dark:text-purple-200'} dark:border-purple-400 dark:hover:bg-purple-200 dark:hover:text-purple-600`}
            >
            <small className="text-sm uppercase">{name}</small>
        </button>
    )
}

Tag.propTypes = {
    name: PropTypes.string.isRequired,
    currentTag: PropTypes.string.isRequired,
    onCurrentTag: PropTypes.func.isRequired,
}

export default Tag
