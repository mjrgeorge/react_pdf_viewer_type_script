/* eslint-disable react-hooks/rules-of-hooks */
import type { Plugin } from '@react-pdf-viewer/core';
import { createStore } from '@react-pdf-viewer/core';
import * as React from 'react';

import ConfirmationModal from './ConfirmationModal';

const openLinksPlugin = (): Plugin => {
    const store = React.useMemo(() => createStore({}), []);

    const handleClick = (e: Event) => {
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
