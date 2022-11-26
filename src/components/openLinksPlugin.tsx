/* eslint-disable react-hooks/rules-of-hooks */
import { createStore } from '@react-pdf-viewer/core';
import * as React from 'react';

import ConfirmationModal from './ConfirmationModal';

const openLinksPlugin = () => {
    const store = React.useMemo(() => createStore({}), []);

    const handleClick = (e) => {
        e.preventDefault();
        const href = (e.target).href;
        store.update('clickedTarget', href);
    };

    const findLinks = (e) => {
        e.container.querySelectorAll('a[data-target="external"]').forEach((link) => {
            link.addEventListener('click', handleClick);
        });
    };

    const renderViewer = (renderViewerProps) => {
        const currentSlot = renderViewerProps.slot;
        if (currentSlot.subSlot) {
            currentSlot.subSlot.children = (
                <>
                    <ConfirmationModal store={store} />
                    {currentSlot.subSlot.children}
                </>
            );
        }

        return currentSlot;
    };

    return {
        onAnnotationLayerRender: findLinks,
        renderViewer,
    };
};

export default openLinksPlugin;
