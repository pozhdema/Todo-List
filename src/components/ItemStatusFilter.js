import React from 'react';
import './ItemStatusFilter.css';

const ItemStatusFilter = () => {
    return (
        <div>
            <button type="button"
                    className="btn-input all">All
            </button>
            <button type="button"
                    className="btn-input active">Active
            </button>
            <button type="button"
                    className="btn-input done">Done
            </button>
        </div>
    );
};

export default ItemStatusFilter;