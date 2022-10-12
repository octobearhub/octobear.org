import React from "react"
import PropTypes from "prop-types"

function LayoutContainer({ children }) {
    return (
        <div className="w-full h-screen bg-blue-50 dark:bg-gray-900">
            {children}
        </div>
    )
}

LayoutContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

export default LayoutContainer
