package com.example.ensetchatbotrag.config;

import org.springframework.ai.document.Document;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.reader.pdf.PagePdfDocumentReader;
import org.springframework.ai.transformer.splitter.TextSplitter;
import org.springframework.ai.transformer.splitter.TokenTextSplitter;
import org.springframework.ai.vectorstore.SimpleVectorStore;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import java.io.File;
import java.nio.file.Path;
import java.util.List;

@Component
public class RagDataLoader {
    @Value("classpath:/pdfs/cv.pdf")
    private Resource pdfResource;

    @Value("store-data-v2.json")
    private String storeFile;

    @Bean
    public SimpleVectorStore simpleVectorStore(EmbeddingModel embeddingModel) {
        try {
            SimpleVectorStore vectorStore = new SimpleVectorStore(embeddingModel);
            String fileStore = Path.of("src", "main", "resources", "store").resolve(storeFile).toAbsolutePath().toString();
            File file = new File(fileStore);

            if (!file.exists()) {
                // Ensure the PDF document reader is properly initialized and used
                PagePdfDocumentReader pdfDocumentReader = new PagePdfDocumentReader(pdfResource);
                List<Document> documents = pdfDocumentReader.get();
                TextSplitter textSplitter = new TokenTextSplitter();
                List<Document> chunks = textSplitter.split(documents);

                // Here you should add the documents to your vector store
                vectorStore.accept(chunks);
                vectorStore.save(file);
            } else {
                vectorStore.load(file);
            }

            return vectorStore;
        } catch (Exception e) {
            // Log the exception or handle it according to your application's requirements
            throw new RuntimeException("Error initializing vector store: " + e.getMessage(), e);
        }
    }
}
