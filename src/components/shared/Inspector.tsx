import React, { useState, useEffect } from 'react';
import { MousePointer, X } from 'lucide-react';

const Inspector = () => {
  const [isInspecting, setIsInspecting] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [elementInfo, setElementInfo] = useState<{
    tagName: string;
    className: string;
    id: string;
    textContent: string;
    dimensions: { width: number; height: number };
    position: { top: number; left: number };
  } | null>(null);

  useEffect(() => {
    if (!isInspecting) {
      setHoveredElement(null);
      setSelectedElement(null);
      setElementInfo(null);
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const target = e.target as HTMLElement;
      if (target && !target.closest('.inspector-ui')) {
        setHoveredElement(target);
        
        // Add highlight overlay
        const rect = target.getBoundingClientRect();
        updateHighlight(rect);
      }
    };

    const handleMouseOut = () => {
      removeHighlight();
      setHoveredElement(null);
    };

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      const target = e.target as HTMLElement;
      if (target && !target.closest('.inspector-ui')) {
        setSelectedElement(target);
        
        const rect = target.getBoundingClientRect();
        setElementInfo({
          tagName: target.tagName.toLowerCase(),
          className: target.className || '',
          id: target.id || '',
          textContent: target.textContent?.slice(0, 100) || '',
          dimensions: {
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          },
          position: {
            top: Math.round(rect.top + window.scrollY),
            left: Math.round(rect.left + window.scrollX)
          }
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsInspecting(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    // Add cursor style
    document.body.style.cursor = 'crosshair';

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.cursor = '';
      removeHighlight();
    };
  }, [isInspecting]);

  const updateHighlight = (rect: DOMRect) => {
    let overlay = document.getElementById('inspector-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'inspector-overlay';
      overlay.style.position = 'absolute';
      overlay.style.pointerEvents = 'none';
      overlay.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
      overlay.style.border = '2px solid #3b82f6';
      overlay.style.zIndex = '9999';
      overlay.style.transition = 'all 0.1s ease';
      document.body.appendChild(overlay);
    }

    overlay.style.top = `${rect.top + window.scrollY}px`;
    overlay.style.left = `${rect.left + window.scrollX}px`;
    overlay.style.width = `${rect.width}px`;
    overlay.style.height = `${rect.height}px`;
  };

  const removeHighlight = () => {
    const overlay = document.getElementById('inspector-overlay');
    if (overlay) {
      overlay.remove();
    }
  };

  const toggleInspector = () => {
    setIsInspecting(!isInspecting);
    if (isInspecting) {
      setSelectedElement(null);
      setElementInfo(null);
    }
  };

  const closeElementInfo = () => {
    setSelectedElement(null);
    setElementInfo(null);
  };

  return (
    <>
      {/* Inspector Toggle Button */}
      <button
        onClick={toggleInspector}
        className={`inspector-ui fixed bottom-6 left-6 p-4 rounded-full shadow-lg transition-colors duration-200 z-40 ${
          isInspecting 
            ? 'bg-red-600 text-white hover:bg-red-700' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        title={isInspecting ? 'Stop Inspecting (ESC)' : 'Start Element Inspector'}
      >
        {isInspecting ? <X className="h-6 w-6" /> : <MousePointer className="h-6 w-6" />}
      </button>

      {/* Inspector Status */}
      {isInspecting && (
        <div className="inspector-ui fixed top-20 left-6 bg-black bg-opacity-80 text-white px-4 py-2 rounded-lg z-50">
          <div className="flex items-center space-x-2">
            <MousePointer className="h-4 w-4" />
            <span className="text-sm">Inspector Mode Active - Click to inspect, ESC to exit</span>
          </div>
        </div>
      )}

      {/* Element Information Panel */}
      {elementInfo && selectedElement && (
        <div className="inspector-ui fixed top-20 right-6 bg-white border border-gray-200 rounded-lg shadow-xl p-4 max-w-sm z-50">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Element Inspector</h3>
            <button
              onClick={closeElementInfo}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-gray-700">Tag:</span>
              <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-blue-600">
                &lt;{elementInfo.tagName}&gt;
              </code>
            </div>
            
            {elementInfo.id && (
              <div>
                <span className="font-medium text-gray-700">ID:</span>
                <code className="ml-2 bg-gray-100 px-2 py-1 rounded text-green-600">
                  #{elementInfo.id}
                </code>
              </div>
            )}
            
            {elementInfo.className && typeof elementInfo.className === 'string' && (
              <div>
                <span className="font-medium text-gray-700">Classes:</span>
                <div className="mt-1 flex flex-wrap gap-1">
                  {elementInfo.className.split(' ').filter(Boolean).map((cls, index) => (
                    <code key={index} className="bg-gray-100 px-2 py-1 rounded text-purple-600 text-xs">
                      .{cls}
                    </code>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <span className="font-medium text-gray-700">Dimensions:</span>
              <span className="ml-2 text-gray-600">
                {elementInfo.dimensions.width} × {elementInfo.dimensions.height}px
              </span>
            </div>
            
            <div>
              <span className="font-medium text-gray-700">Position:</span>
              <span className="ml-2 text-gray-600">
                ({elementInfo.position.left}, {elementInfo.position.top})
              </span>
            </div>
            
            {elementInfo.textContent && (
              <div>
                <span className="font-medium text-gray-700">Text:</span>
                <div className="mt-1 bg-gray-50 p-2 rounded text-gray-600 text-xs max-h-20 overflow-y-auto">
                  {elementInfo.textContent}
                  {elementInfo.textContent.length >= 100 && '...'}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Inspector;